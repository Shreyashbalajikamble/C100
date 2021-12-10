var sr = window.webkitSpeechRecognition;
var SpeechRecognition = new sr();

function start(){
 document.getElementById("textBox").innerHTML="";
 SpeechRecognition.start();
}

SpeechRecognition.onresult = function run(event){
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("textBox").innerHTML=content;
    if(content == "Take my selfie."){
    speak();
    }
}

function speak(){
    var api = window.speechSynthesis;

    text_box = "Takeing Your selfie in 5 seconds.";

    var utterThis = new SpeechSynthesisUtterance(text_box);

    api.speak(utterThis);

    camara = document.getElementById("web_cam");

    Webcam.attach(camara);

    setTimeout(function(){
        takeing_selfie();
        save();
    },5000)
}

Webcam.set({
    width : 360,
    height : 250,
    image_format : "png",
    png_quality : 90 
});

function takeing_selfie(){
    Webcam.snap(function(img_location){
        document.getElementById("results").innerHTML="<img src='"+img_location+"' id='img_png'>";
    })
}

function save(){
    var img_loc = document.getElementById("img_png").src;

    document.getElementById("link").href=img_loc;

    document.getElementById("link").click();
}