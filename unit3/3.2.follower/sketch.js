let x = 0;
let y = 0;
let d = 0;
let speedfactor = 3;
let speedx = speedfactor;
let speedy = speedfactor;
let score = 50;
let img; // Image for the follower

function preload() {
  img = loadImage('Braiyn.jpg'); // Load the follower image
}

function setup() {
  createCanvas(800, 800);
  x = random(width); // Random starting x position
  y = random(height); // Random starting y position
}

function draw() {
  background(220);

  // Distance formula
  d = sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);

  // Add movement to the follower
  x += speedx;
  y += speedy;

  // Debug text
  textSize(30);
  text("d: " + d.toFixed(2), 50, 150);
  text("score: " + score, 50, 50);

  // Display the follower (image) at its position
  image(img, x - 25, y - 25, 50, 50); // Center the image at (x, y)

  // Adjust speed based on mouse position
  if (mouseX > x) {
    speedx = speedfactor;
  } else {
    speedx = -speedfactor;
  }

  if (mouseY > y) {
    speedy = speedfactor;
  } else {
    speedy = -speedfactor;
  }

  // Collision detection
  if (d < 25) {
    score += 1; // Increase score

    // Move to a new random position
    x = random(width);
    y = random(height);
  }

  // Boundary handling (optional, so the image stays within the canvas)
  if (x < 25 || x > width - 25) {
    speedx *= -1; // Reverse direction horizontally
  }
  if (y < 25 || y > height - 25) {
    speedy *= -1; // Reverse direction vertically
  }
}
