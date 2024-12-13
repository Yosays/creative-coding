// push check 1
function setup() {
  createCanvas(1912, 954);
  frameRate(10);
  background(0, 0, 0);
  strokeWeight(0);
}

// This is meant to be a screensaver I wanted it to be something that had no exact outcome 
// But still had something that a person can look forward to like anticpating what the next
// Shapes will be or how long they will stay transparent or what color they would be
// Which led to me come up with the name "Shapeless"

function draw() {
  // Add transparency to colors
  fill(random(0, 255), random(0, 255), random(0, 255), random(50, 200));

  let shapeType = random();
  let xPos = random(0, width);
  let yPos = random(0, height);
  let shapeSize = random(50, 200);

  // Random rotation angle
  let rotationAngle = random(TWO_PI);

  push();
  translate(xPos, yPos); // Move the origin to the shape position
  rotate(rotationAngle); // Rotate the shape randomly

  if (shapeType > 0.66) {
    // Draw an ellipse
    ellipse(0, 0, shapeSize, shapeSize);
  } else if (shapeType > 0.33) {
    // Draw a rectangle
    rect(-shapeSize / 2, -shapeSize / 2, shapeSize, shapeSize);
  } else {
    // Draw a triangle
    let x1 = random(-shapeSize, shapeSize);
    let y1 = random(-shapeSize, shapeSize);
    let x2 = x1 + random(-shapeSize, shapeSize);
    let y2 = y1 + random(-shapeSize, shapeSize);
    let x3 = x1 + random(-shapeSize, shapeSize);
    let y3 = y1 + random(-shapeSize, shapeSize);
    triangle(x1, y1, x2, y2, x3, y3);
  }

  pop(); // Restore original coordinate system

  // Fade effect
  noStroke();
  fill(0, 10); // Semi-transparent black overlay
  rect(0, 0, width, height);
}
