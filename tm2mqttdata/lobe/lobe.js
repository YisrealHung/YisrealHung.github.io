var canvas
var ctx
var video;
var webcamWidth;
var webcamHeight;
let labelContainer, maxPredictions, position = -1, range, check = -1, lastrange = -1, bigname;
let send_state = 0;

let target_list = [];
let score_list = [];
navigator.getUserMedia = (
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia
);

let URL = "";

async function init() {
  URL = document.getElementById("modelin").value;
  canvas = document.createElement('canvas')
  video = document.createElement('video')
  video.setAttribute('autoplay', false)

  ctx = canvas.getContext('2d')

  if (navigator.getUserMedia) {
    navigator.getUserMedia (
      {
        video: true,
        audio: false
      },

      function(stream) {
        webcamWidth = stream.getVideoTracks()[0].getSettings().width
        webcamHeight = stream.getVideoTracks()[0].getSettings().height
        canvas.setAttribute('width', webcamWidth);
        canvas.setAttribute('height', webcamHeight);
        video.srcObject = stream
      },

      function(err) {
        console.log( err);
      }
    );
  } else {
  console.log("getUserMedia not supported by your browser");
  }

  ctx.drawImage(video, 0,0)
  img_dataURI = canvas.toDataURL('image/png')
  //document.getElementById("webcam-container").appendChild(img_dataURI);
  document.getElementById("webcam-container").src = img_dataURI;

  countClass(img_dataURI);

  window.requestAnimationFrame(loop);

}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n);
    });
}


async function loop() {
  ctx.drawImage(video, 0,0)
  img_dataURI = canvas.toDataURL('image/png')
  document.getElementById("webcam-container").src = img_dataURI;

  fetchPredictionForImage(img_dataURI);
  await delay(50);
  window.requestAnimationFrame(loop);
}

const countClass = base64Img => {
  fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      image: base64Img,
    }),
    headers: {"Content-Type": "application/json"}
  })
    .then(response => response.json())
    .then(jsonResult => {

      for (let i=0; i<jsonResult.predictions.length; i++) {
        let {label, confidence} = jsonResult.predictions[i];
        target_list.push(label);
        score_list.push(confidence);
        var tt = "myProgress" + (i+1);
        var elem = document.getElementById(tt);
        elem.style.width = 200 + 'pt';
      }

    });
};

const fetchPredictionForImage = base64Img => {
  fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      image: base64Img,
    }),
    headers: {"Content-Type": "application/json"}
  })
    .then(response => response.json())
    .then(jsonResult => {
      // Find and print top result
      for (let i=0; i<jsonResult.predictions.length; i++) {
        let {label, confidence} = jsonResult.predictions[i];

        let k = 0;
        for (k=0; k<target_list.length; k++) {
          if (label == target_list[k]) {
            score_list[k] = confidence;
            break;
          }
        }

        if (range < confidence.toFixed(2)) {
            range = confidence.toFixed(2);
            bigname = label;
            lastrange = range;
        }

        var elem = document.getElementById("myBar"+(k+1));
        elem.style.width = confidence*100 + '%';
        document.getElementById("myBar"+(k+1)).innerHTML= (confidence.toFixed(2)*100).toFixed(0) + '%';
        document.getElementById("label"+(k+1)).innerHTML= target_list[k];

      }

      for (let h=0; h<target_list.length; h++) {
        if (bigname == target_list[h]) {
          position = h;
        }
      }

      if (lastrange > 0.7) {
        if (position != check) {
            try {
                if (send_state == 1) {
                  Web_USB_Send(String(position + 1));
                  //console.log("web usb:" + String(position + 1))

                }

                else if (send_state == 2) {
                  publish(String(position + 1));
                }
                check = position;
            } catch (error) {
                console.log(error);
            }
        }
      }
      range = -1;

    });
};

// WebUSB
let port, baud = 9600;
async function Web_USB_Connect() {
  try {
    if (!("serial" in navigator)) {
      alert("此瀏覽器不支援WebUSB功能。");
    }
    baud = document.getElementById("baudin").value;
    port = await navigator.serial.requestPort();
    await port.open({ baudRate: baud });
    send_state = 1;
  }
  catch(e) {
    console.log(e);
  }
}

async function Web_USB_Send(strMsg) {
  const encoder = new TextEncoder();
  const writer = port.writable.getWriter();
  await writer.write(encoder.encode(strMsg));
  writer.releaseLock();
}


navigator.serial.addEventListener("connect", (event) => {
  alert("請重新點選連線按鈕，連接USB裝置。");
});

navigator.serial.addEventListener("disconnect", (event) => {
  send_state = 0;
  alert("USB裝置已移除，網頁連線斷開。");
});

// MQTT
// Called after form input is processed
function startConnect() {
    // Generate a random client ID
    clientID = document.getElementById("user").value;

    // Fetch the hostname/IP address and port number from the form
    host = document.getElementById("host").value;
    port = document.getElementById("port").value;

    // Print output for the user in the messages div
    document.getElementById("messages").innerHTML += '<span>Connecting to: ' + host + ' on port: ' + port + '</span><br/>';
    document.getElementById("messages").innerHTML += '<span>Using the following client value: ' + clientID + '</span><br/>';

    // Initialize new Paho client connection
    if (host == "broker.emqx.io") {
      client = new Paho.MQTT.Client("wss://"+host+":"+port+"/mqtt", clientID);
    }
    else {
      client = new Paho.MQTT.Client("wss://"+host+":"+port+"/", clientID);
    }

    // Set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    // Connect the client, if successful, call onConnect function
    client.connect({
        onSuccess: onConnect,
    });
}

// Called when the client connects
function onConnect() {
    send_state = 2;
    // Fetch the MQTT topic from the form
    topic = document.getElementById("topic").value;

    // Print output for the user in the messages div
    document.getElementById("messages").innerHTML += '<span>Subscribing to: ' + topic + '</span><br/>';

    // Subscribe to the requested topic
    client.subscribe(topic);
}

// Called when the client loses its connection
function onConnectionLost(responseObject) {
    console.log("onConnectionLost: Connection Lost");
    if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost: " + responseObject.errorMessage);
    }
}

// Called when a message arrives
function onMessageArrived(message) {
    // console.log("onMessageArrived: " + message.payloadString);
    document.getElementById("messages").innerHTML += '<span>' + message.destinationName + ' : ' + message.payloadString + '</span><br/>';
    updateScroll(); // Scroll to bottom of window
}

// Called when the disconnection button is pressed
function startDisconnect() {
    client.disconnect();
    document.getElementById("messages").innerHTML += '<span>Disconnected</span><br/>';
    updateScroll(); // Scroll to bottom of window
    send_state = 0;
}

// Updates #messages div to auto-scroll
function updateScroll() {
    var element = document.getElementById("messages");
    element.scrollTop = element.scrollHeight;
}

function publish(target) {
  //var mqtt_msg = document.getElementById("topic").value;
  var mqtt_msg = target;
  var message = new Paho.MQTT.Message(mqtt_msg);
  message.destinationName = topic;
  for (let i=0; i<1; i++) {
    client.send(message);
  }
}
