let yoff = 0.0;
let totalPts = 300;
let steps = totalPts + 1;
let mouseX
var song;
var slider;
var button;
var fft;
var volhistory = [];
var w;
var jumpButton;
var backButton;

let myFont;

function preload(){
  song = loadSound("theswan.mp3");

  myFont = loadFont("Vanadine.ttf");
}

function playSong(){
  if (song.isPlaying()){
    song.pause();
  } else{
    song.play();
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  stroke(255);
  noStroke();
  frameRate(7);
  slider = createSlider(0, 1, 0.5, 0.01);

  slider.addClass("slider");
  slider.position(30, windowHeight-40);
  song.pause();

  jumpButton = createButton(">>");
  jumpButton.position(160, windowHeight-80)
  jumpButton.mousePressed(jumpSong);

  backButton = createButton("<<");
  backButton.position(30, windowHeight-80)
  backButton.mousePressed(jumpback);

  button = createButton('play')
  button.position(83, windowHeight-80);
  button.mousePressed(togglePlaying);

  FFT = new p5.FFT(0.6, 128);
  w = windowWidth / 128;
}

function togglePlaying(){
  if(!song.isPlaying()){
    song.play();
    button.html("pause");
  }  else {
    song.pause();
    button.html("play");
  }
}
function jumpSong(){
  var len = song.duration();
  var t = song.currentTime()+10;
  song.jump(t);
}

function jumpback(){
  var len = song.duration();
  var t = song.currentTime()-10;
  song.jump(t);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0)
  textFont(myFont);
  song.setVolume(slider.value());
  noStroke();
  var spectrum = FFT.analyze();
  for (var i = 0; i < spectrum.length; i++){
    var amp = spectrum[i];
    var y = map(amp+10, 0, windowWidth, height+5, 0);
    fill(frameCount%880,40,70);
    rect((i*w), y*0.5, w - 5, height - y);
    //rect((i*w)+windowWidth*2, y*0.5, w - 5, height - y);
    //get rid of +windowWidth/2 for it to be normal again
  }

    var s = map(song.currentTime(), 0, song.duration(), 0, windowWidth);
    stroke("#ffffff");
    strokeWeight(3);
    line(s, 0, s, 50);

    push();
    noStroke();
    fill(255);
    textSize(20);
    print(song.currentTime());

    //you need to add two different statements here
    //the first checks to see if the current time is greater than 3
    //the second checks to see if the current time is less than 25
    //if both of these statements are true, then draw this text.
    //you can simply change the range to change the time on screen.
    //you'll have to do this for every text object
    if (song.currentTime() > 3 && song.currentTime() < 10){
      text("focus", windowWidth/1.3, windowHeight/1.3);

    }
    if (song.currentTime() > 15 && song.currentTime() <20){
      text("how do people keep a balanced lifestyle?", windowWidth/1.5, windowHeight/1.3);
      background
    }
    if (song.currentTime() > 25 && song.currentTime() <40){
      text("wonder if drinking water helps concentration", windowWidth/1.6, windowHeight/1.3);
    }
    if (song.currentTime() > 55 && song.currentTime() <65){
      text("I only have 15 minutes", windowWidth/1.3, windowHeight/1.3);
    }
    if (song.currentTime() > 70 && song.currentTime() <83){
        text("Goes by faster than I thought", windowWidth/1.3, windowHeight/1.3);
    }
    if (song.currentTime() > 85 && song.currentTime() < 95){
      text("she must work in construction\nwas that her dream job?", windowWidth/1.3, windowHeight/1.3);
    }
    if (song.currentTime() > 98 && song.currentTime() < 110){
      text("focus", windowWidth/1.3, windowHeight/1.3);
    }
    if (song.currentTime() > 115 && song.currentTime() < 125){
      text("Did I finish that yet?", windowWidth/1.3, windowHeight/1.3);
    }
    if (song.currentTime() > 126 && song.currentTime() < 0){
      text("focus", windowWidth/1.3, windowHeight/1.3);
    }

  }
