song1="";
song2="";
function preload(){
song1=loadSound("stay.mp3");
song2=loadSound("song1.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    canvas.position(450,150);
  
    video=createCapture(VIDEO)
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song1.play();

}