



function setup(){

createCanvas(windowWidth, windowHeight)
background(237, 194, 126);


}


function draw(){
background(237, 194, 126);

//CENTER
  strokeWeight(8);
  stroke(255)
  fill(255)
  point(400, 400);
  line(400,400, mouseX, mouseY)

  if(mouseIsPressed){
    circle(400, 400, 600);
    stroke(237, 194, 126);
    line(400,400, mouseX, mouseY)}
      else {circle(400, 400, 10);}



//clock


  strokeWeight(4);
  noFill();
if(keyIsPressed){strokeWeight(8);}
else {
  strokeWeight(4);
}
circle(155, 625, 50);

circle(70, 405, 50);

circle(170, 160, 50);

circle(400, 65, 50);

circle(730, 400, 50);

circle(640, 165, 50);

circle(400, 730, 50);

circle(640, 630, 50);

  }



  function keyTyped(){
    if(key === 's'){
      save("Homework.png")}}
