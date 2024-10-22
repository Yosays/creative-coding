let newX = 60;
let newY = 300;

let newXspeed = 5;
let newYspeed = 5;

let x = 90;
let y = 0;

let xspeed = 5;
let yspeed = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

if (x < 0 | x > width){
  xspeed = xspeed * -1;

  
  
}

if (y < 0 | y > height){
  yspeed = yspeed * -1;

  
 
}

if (newX < 0 | newX > width){
  newXspeed = newXspeed * -1
}

if (newY < 0 | newY > height){
  newYspeed = newYspeed * -1
}


x = x + xspeed;

y = y + yspeed; 

newX = newX + newXspeed;

newY = newY + newYspeed;

  // draw a circle
  fill('Black');
  circle (x, y, 50);
  // New circle
  circle (newX, newY, 50);
}


