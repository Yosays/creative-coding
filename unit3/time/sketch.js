let secondLineHeight;
let minuteLineHeight;
let hourLineHeight;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  // Calculate line heights based on current time
  secondLineHeight = map(second(), 0, 59, 0, 300); // Scale seconds to 0–300 pixels
  minuteLineHeight = map(minute(), 0, 59, 0, 300); // Scale minutes to 0–300 pixels
  hourLineHeight = map(hour(), 0, 23, 0, 300); // Scale hours to 0–300 pixels

  // Draw the second line
  strokeWeight(4);
  stroke(255, 0, 0); // Red for seconds
  let secondY = 650 - secondLineHeight;
  line(100, 650, 100, secondY);
  drawFlower(100, secondY, 25);

  // Draw the minute line
  stroke(0, 255, 0); // Green for minutes
  let minuteY = 650 - minuteLineHeight;
  line(300, 650, 300, minuteY);
  drawFlower(300, minuteY, 25);

  // Draw the hour line
  stroke(0, 0, 255); // Blue for hours
  let hourY = 650 - hourLineHeight;
  line(500, 650, 500, hourY);
  drawFlower(500, hourY, 25);
}

// Function to draw a flower around a circle
function drawFlower(x, y, radius) {
  noFill();
  strokeWeight(2);
  let numPetals = 8; // Number of petals
  let petalLength = radius * 2; // Length of petals
  for (let i = 0; i < numPetals; i++) {
    let angle = (TWO_PI / numPetals) * i;
    let petalX = x + cos(angle) * petalLength;
    let petalY = y + sin(angle) * petalLength;
    line(x, y, petalX, petalY);
  }

  // Draw the center circle
  fill(255);
  circle(x, y, radius);
}
