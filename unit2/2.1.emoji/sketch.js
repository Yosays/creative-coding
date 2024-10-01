function setup() {
  // create a canvas
  createCanvas(800, 800);
  //https://emojipedia.org/microsoft/windows-11-23h2-june-2024-update/face-without-mouth <---- this is the emoji I attempted to print out
  // disable animation
  noLoop();
}

function draw() {
  background(220);

  //No Reaction Face
  rectMode(CENTER);
  //Headtop
  stroke('gold');
  fill('gold');
  circle(200,200,250);
  //Eyes.1
  stroke('white');
  fill('white');
  circle (155,155,60);
  //Eyes.2
  stroke('white');
  fill('white');
  circle(245,155,60);
  //Pupils.1
  stroke('black');
  fill('black');
  circle(240,155,20);
  //Pupils.2
  stroke('black');
  fill('black');
  circle(160,155,20);

  //Throwing Up
  stroke(96,245,66);
  fill(96,245,66);
  circle(400,400,250);
  //Eyes.1
  stroke('white');
  fill('white');
  circle(440,385,62.5);
  //Eyes.2
  stroke('whtie');
  fill('white');
  circle(360,385,62,5);
  //Eyebrow.1
  stroke('black');
  strokeWeight(10);
  curve(700,505,500,370,465,375,500,400);
  

  

}