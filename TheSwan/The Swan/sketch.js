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

function preload(){
song = loadSound("theswan.mp3")

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
    frameRate(7);
    slider = createSlider(0, 1, 0.5, 0.01);
    song.pause();
    jumpButton = createButton(">>");
    jumpButton.mousePressed(jumpSong);
    button = createButton('play');
    button.mousePressed(playSong);
    FFT = new p5.FFT(0.6, 128);
    w = windowWidth / 128;

}
function jumpSong(){
var len = song.duration();
var t = random(len);
song.jump(len/2);

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0)
  song.setVolume(slider.value());
  //stroke(255);
  noStroke();
  var spectrum = FFT.analyze();
  for (var i = 0; i < spectrum.length; i++){
    var amp = spectrum[i];
    var y = map(amp, 0, windowWidth, height+5, 0);
    fill(i, 255, 255)
    rect((i*w), y*0.5, w - 6, height - y);
  }
  console.log(spectrum);
  stroke(255);
  noFill();

  push();
   noStroke();
   fill(150);
   textSize(10);

   if (song.currentTime() <30){
     text("focus", windowWidth/6, windowHeight/3);
   }


   if (song.currentTime() >30){
     text("I only have 15 minutes", windowWidth/2.2, windowHeight/6);
   }



  // // if (distance < 50){
  //   // fill(150)
  //  }
  //  else { fill(150);}
  //  text("Did I finish that yet?", windowWidth/1.2, windowHeight/3);
  //
  //
  // // if (distance < 75){
  //    fill(150)
  //  }
  //  else { fill(150);}
  //  text("wonder if drinking water helps concentration", 350, 730);
  //
  //
  //
  //  if (distance < 50){
  //    fill(150)
  //  }
  //  else { fill(150);}
  //  text("she must work in construction", 100, 600);
  //  text("was that her dream?", 80, 615);
  //
  //
  //  if (distance < 50){
  //    fill(150)
  //  }
  //  else { fill(150);}
  //  text("how do people stay balanced?", windowWidth/5, 180);
 pop();

  }
  //\\stroke(255);
  //line(length, height/2,length, 400);

//  if
  //let rand = 0;
  //for (let i = 1; i < steps; i++){
  //  point((width / steps) * i, height/2 + random (-rand, rand));
  //  rand +=random(-5,5);




  //beginShape();
  //let xoff = 0;

  //for  (letx = 0, x <= width; x+=10)
  //{
    //let y = map(noise(xoff, yoff), 0, 1, 200, 300);

    //vertex(x,y);
    //xoff += 0.05;

 //}
  //yoff += 0.01;
 //vertex(width, height);
  //ertex(0, height
  //endShape(CLOSE);
