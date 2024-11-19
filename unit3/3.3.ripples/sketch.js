let x = 0;
let y = 0;
let d = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  // distance formula
d = sqrt((x - mouseX) **2 + (y - mouseY) **2);

//debug
textSize(30);
text("d: " + d, 50, 150);
}