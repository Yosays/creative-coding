let x = 0;
let y = 0;
let d = 0;
let speedfactor = 3;
let speedx = speedfactor;
let speedy = speedfactor;
let score = 50;
let score2 = 50;
let img;


function preload(){
img = loadImage('https://yosays.github.io/creative-coding/unit3/3.2.follower/Braiyn.jpg');
}

function setup() {
  createCanvas(800, 800);
  x = random(width);
  y = random(height);
}

function draw() {
  background(220);

  // distance formula
  d = sqrt((x - mouseX) **2 + (y - mouseY) **2);

  // add the movement
  x += speedx;
  y += speedy;

  //debug
  textSize(30);
  text("d: " + d, 50, 150);
  text("score " + score,  50 , 50);

  //circle
  image (img, x - 25, y - 25, 50, 50);

  

  if (mouseX > x){

    speedx = speedfactor;
  }
  else{
    speedx = -speedfactor;
  }

  if (mouseY > y){

    speedy = speedfactor;
  }
  else{
    speedy = -speedfactor;
  }

  if ( d < 25){
    score += 1;

    x = random(width);

    y = random(height);
  }

}
