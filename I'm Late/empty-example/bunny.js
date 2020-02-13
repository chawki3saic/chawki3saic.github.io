
let bunny;



function preload(){
  bunny = loadImage('images/bunny.png');
}



function setup(){

  createCanvas(windowWidth, windowHeight);
  background(0);

}

function draw(){

    image(bunny, mouseX, mouseY, 200, 200);
}
