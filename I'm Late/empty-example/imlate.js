let angle=0;
let bunny;

let bunnyX;
let bunnyY;

let speedX;
let speedY;

let circle1X = 0;
let circle1Y = -200;

let angleCircle = 1;
function preload(){
  bunny = loadImage('images/bunny.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight)
  imageMode(CENTER);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(153, 2, 2);

  if(mouseIsPressed){
    background(0,0,0);
    fill(255);
    textSize(100);
    text("I'M LATE!", 200, 450);
  }
  else {
    background(153, 2, 2);

  }

  let v0= createVector(50,50);
  let v1= createVector(50, 0);

  drawArrow(v0, v1.rotate(angle), 'white');
  angle += 0.01;

  let d = day();
  let h = hour();
  let millisecond = millis();


  //CENTER
  //image of bunny to appear at random when pressing keys
  //function mouseIsPressed(){}
  strokeWeight(4);
  stroke(255);
  if(keyIsPressed){
    image(bunny, 400, 400, 700, 700);
    fill(0);
    stroke(0);
    textSize(100);
    text('HURRY!', 230, 100,);
    text('\n \n' + millisecond, 25, 500);

  }
  else {

    fill(255);
  }
  push();
  translate(400, 400);

  rotate(radians(angleCircle+= -0.1));

  circle(circle1X, circle1Y, 25);
  mouseCollide = dist(mouseX, mouseY, circle1X, circle1Y);
  if(mouseCollide < 50){
    angleCircle+= -0.6;
  }
  circle(0, 200, 25);
  circle(200, 0, 25);
  circle(-200, 0, 25);
  circle(-150, -150, 25);
  circle(150, 150, 25);
  circle(150, -150, 25);
  circle(-150, 150, 25);
  // circle(175, 625, 50);
  //
  // circle(70, 405, 50);
  //
  // circle(170, 160, 50);
  //
  // circle(400, 65, 50);
  //
  // circle(730, 400, 50);
  //
  // circle(640, 165, 50);
  //
  // circle(400, 730, 50);
  //
  // circle(640, 630, 50);
  pop();
}

function drawArrow(base, vec, white){
  push();
  stroke(255);
  strokeWeight(8);
  fill(255);
  translate(400, 400);
  line( 0, 0, vec.x, vec.y);
  rotate(vec.mag()-600, 0);
  pop();
}
// mouse collide with rotating circles,
//  mouseCollide
//circle(175, 625, 50);

function keyTyped(){
  if(key === 's'){
    save("AliceClock.png")
  }
}
