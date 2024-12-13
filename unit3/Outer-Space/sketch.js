let secondLineHeight;
let minuteLineHeight;
let hourLineHeight;
let stars = []; // Array to store star positions

// This work like mentioned before is meant to be shooting stars out in space
// I added on stars to give it a more space look which led me to call this work "Outer-Space"

// Artist statement: I wanted to originally capture stars shooting across the sky.
// I had different comments on my computer, then my laptop, and I forced pushed my origin, which messed things up.
// https://www.alpharithms.com/evenly-spacing-objects-around-a-circle-in-p5js-processing-180222/
// I used information I found on this website to create the star look.

function setup() {
  createCanvas(800, 800);
  
  // Used a for loop to constantly loop and make stars
  for (let i = 0; i < 200; i++) {
    stars.push(createVector(random(width), random(height)));
  }
}

function draw() {
  background('black');
  
  // Draw background stars
  drawStars();
  
  // Calculate line heights based on current time
  secondLineHeight = map(second(), 0, 59, 0, 300);
  minuteLineHeight = map(minute(), 0, 59, 0, 300);
  hourLineHeight = map(hour(), 0, 23, 0, 300);

  // Draw the second line
  strokeWeight(4);
  stroke("yellow"); // Yellow for seconds
  let secondY = 650 - secondLineHeight;
  line(100, 650, 100, secondY);
  drawStar(100, secondY, 25);

  // Draw the minute line
  stroke("yellow"); // Yellow for Minutes
  let minuteY = 650 - minuteLineHeight;
  line(300, 650, 300, minuteY);
  drawStar(300, minuteY, 25);

  // Draw the hour line
  stroke('yellow'); // Yellow for Hours
  let hourY = 650 - hourLineHeight;
  line(500, 650, 500, hourY);
  drawStar(500, hourY, 25);
}

// I used information I found on this website to help me create petals around the circle but I
// opted for rays of light on a shooting stars
// https://www.alpharithms.com/evenly-spacing-objects-around-a-circle-in-p5js-processing-180222/

// Function to draw background stars
function drawStars() {
  noStroke();
  fill(255); // White color for stars
  
  // Draw random stars in the background
  for (let i = 0; i < stars.length; i++) {
    ellipse(stars[i].x, stars[i].y, random(1, 3)); // Draw small circles with random size
  }
}

// Function to draw rays of light around the star
function drawStar(x, y, radius) {
  noFill();
  strokeWeight(2);
  let numStar = 8; // Number of rays
  let rayLength = radius * 2; // Length of rays
  
  // Draw rays
  for (let i = 0; i < numStar; i++) {
    let angle = (TWO_PI / numStar) * i;
    let rayX = x + cos(angle) * rayLength;
    let rayY = y + sin(angle) * rayLength;
    line(x, y, rayX, rayY);
  }

  // Draw the center circle
  fill('yellow');
  noStroke();
  circle(x, y, radius * 1); // Draw a circle to represent the star
}
