let x = 0;
let y = 0;
let speedfactor = 0.05; // Adjust this to control how quickly the image follows the mouse
let score = 0;
let img;

function preload() {
  img = loadImage('https://yosays.github.io/creative-coding/unit3/3.2.follower/Braiyn.jpg');
}

function setup() {
  createCanvas(800, 800);
  x = random(width);
  y = random(height);
}

function draw() {
  background('black');

  // Gradually move towards the mouse position
  x += (mouseX - x) * speedfactor;
  y += (mouseY - y) * speedfactor;

  // Display score
  textSize(30);
  fill('white');
  text("score: " + score, 50, 50);

  // Draw the image
  image(img, x - 25, y - 25, 50, 50);

  // Check if the image reaches close to the mouse cursor
  let d = dist(x, y, mouseX, mouseY);
  if (d < 25) {
    score--; // Subtract one from the score
    x = random(width);
    y = random(height);
  }
}
