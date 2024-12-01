function setup() {
  createCanvas(1912, 954);
  frameRate(10);
  background(0, 0, 0);
  strokeWeight(0);
}

function draw() {
  // Add transparency to colors
  fill(random(0, 255), random(0, 255), random(0, 255), random(50, 200));

  let shapeType = random();
  if (shapeType > 0.66) {
    // Draw an ellipse
    ellipse(random(0, width), random(0, height), random(50, 200), random(50, 200));
  } else if (shapeType > 0.33) {
    // Draw a rectangle
    rect(random(0, width), random(0, height), random(50, 200), random(50, 200));
  } else {
    // Draw a triangle
    let x1 = random(0, width);
    let y1 = random(0, height);
    let x2 = x1 + random(-100, 100);
    let y2 = y1 + random(-100, 100);
    let x3 = x1 + random(-100, 100);
    let y3 = y1 + random(-100, 100);
    triangle(x1, y1, x2, y2, x3, y3);
  }

  // Fade effect
  noStroke();
  fill(0, 10); // Semi-transparent black overlay
  rect(0, 0, width, height);
}
