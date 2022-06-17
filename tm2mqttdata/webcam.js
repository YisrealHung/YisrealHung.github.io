var canvas
var ctx
var video;
var webcamWidth;
var webcamHeight;

navigator.getUserMedia = (
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia
);

function startWebcam() {
  // canvas = document.getElementById("myCanvas")
  // video = document.getElementById('video')
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

        // video.src = window.URL.createObjectURL(localMediaStream);
        video.srcObject = stream
      },

      function(err) {
        console.log( err);
      }
    );
  } else {
  console.log("getUserMedia not supported by your browser");
  }

}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n);
    });
}

function getCurrentFrame() {
  ctx.drawImage(video, 0,0)
  img_dataURI = canvas.toDataURL('image/png')
  document.getElementById("my-data-uri").src = img_dataURI

  fetchPredictionForImage(img_dataURI);
  window.requestAnimationFrame(loop);
}

async function loop() {
  ctx.drawImage(video, 0,0)
  img_dataURI = canvas.toDataURL('image/png')
  document.getElementById("my-data-uri").src = img_dataURI

  fetchPredictionForImage(img_dataURI);
  await delay(50);
  window.requestAnimationFrame(loop);
}

const fetchPredictionForImage = base64Img => {
  fetch("http://localhost:38101/v1/predict/6662c1e2-b121-48ba-91fc-7f77d732e209", {
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
        const {label, confidence} = jsonResult.predictions[i];
        console.log(
          `predicted label:\t${label}\nconfidence:\t\t\t${confidence}`,
        );
      }

    });
};
