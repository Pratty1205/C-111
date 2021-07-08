Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:100,
    constraints:{
        facingMode:"environment"
    }
});
var camera=document.getElementById("camera");
Webcam.attach('#camera')