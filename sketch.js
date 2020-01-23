//our custom variables
let pointX;
let mouseDist;
let triY;

function setup() {
  // create the canvas element
  createCanvas(900,500);

  //giving pointX a value of 300
  pointX = 600
  triY = 300
  rectMode(CENTER);


  // puts all rectangles in center of canvas, b/c if not it will
  //put starting point in center instead of shape
  // must end all commands with ";" to complete the tasks within each section
} //{} ends/starts each section/main setup
 //caps is important

function draw() {
  mouseDist = dist (mouseX, mouseY, pmouseX, pmouseY);
//  print(mouseDist);
  background(29, 150, 161);
smooth();
strokeWeight(50);
stroke(255);
  //255 is white
  //point expects an x and y coordinate
point(pointX, 300);
strokeWeight(5);

//line expects two x, y coordinates
//then connects the coordinates
line(mouseX, mouseY, pmouseX, pmouseY);

//elipse expects an x, y coordinates
// and width and height
ellipse(700, 400, 200, 100);

fill(197, 149, 219);
//affects shapes that come immediately after

//rectangle expecting and x,y coordinate and width and height
rect(width/2, height/2, 300, 100);
noStroke();
fill(255, 209, 248);
//traingle expects 3 sets of x,y coordinates
triangle(800, 12, 850, 200, 700, triY);
//print(mouseX);
if(mouseIsPressed){
  //when mouse is pressed reset pointx to 200
  pointX= 200;
  print("pressed!");
} else
//when mouse is released reset point to 600
{
  pointX = 600;
}
if(keyIsPressed){
  //when key is pressed reset pointx to 200
  triY = 600;
} else
//when key is released reset point to 600
{
  triY = 300;
}
}
