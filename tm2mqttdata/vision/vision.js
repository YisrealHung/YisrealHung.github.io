let model, webcam, labelContainer, maxPredictions, position = -1, range, check = -1, lastrange = -1;
var target_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let send_state = 0;

async function init() {
    const URL = document.getElementById("modelin").value;
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const flip = true;

    webcam = new tmImage.Webcam(640, 640, flip);


    await webcam.setup();
    await webcam.play();

    window.requestAnimationFrame(loop);

    document.getElementById("webcam-container").appendChild(webcam.canvas);

    for (let i = 0; i < maxPredictions; i++) {
        var tt = "myProgress" + (i+1);
        var elem = document.getElementById(tt);
        elem.style.width = 200 + 'pt';
    }
}

async function loop() {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
}


async function predict() {
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        if (range < prediction[i].probability.toFixed(2)) {
            range = prediction[i].probability.toFixed(2);
            position = i;
            lastrange = range;
        }
        var elem = document.getElementById("myBar"+target_list[i]);
        elem.style.width = prediction[i].probability.toFixed(2)*100 + '%';
        document.getElementById("myBar"+target_list[i]).innerHTML= (prediction[i].probability.toFixed(2)*100).toFixed(0) + '%';
        document.getElementById("label"+target_list[i]).innerHTML= prediction[i].className;
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
              // pass
          }
      }
    }
    range = -1;
}

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
