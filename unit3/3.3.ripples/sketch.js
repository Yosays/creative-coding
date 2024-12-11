// Array to store all the rippler objects
let ripplers = [];

// The Rippler class represents an individual ripple effect
class Rippler {
  constructor(x, y) {
    // Initialize the position (x, y) and diameter (d) of the ripple
    this.x = x;
    this.y = y;
    this.d = 0; // Initial diameter is 0 (circle will start small)
  }

  // Method to draw the ripple effect
  draw() {
    this.d += 1; // Increase the diameter of the ripple on each frame
    stroke(51, 123, 212); // Set the stroke color (blue)
    strokeWeight(1); // Set the thickness of the stroke (outline of the circle)
    noFill(); // Don't fill the circle, just outline it
    circle(this.x, this.y, this.d); // Draw the circle with the current diameter
  }
}

// Setup function, runs once at the beginning to initialize the canvas
function setup() {
  createCanvas(800, 800); // Create an 800x800 canvas
}

// Draw function, runs continuously to update the canvas
function draw() {
  background(52, 134, 235); // Set the background color (light blue)

  // Loop through each rippler in the ripplers array and call its draw method
  for (let i = 0; i < ripplers.length; i++) {
    ripplers[i].draw(); // Draw the ripple for each rippler object
  }
}

// MousePressed function, called when the user clicks the mouse
function mousePressed() {
  // Add a new rippler at the location of the mouse click (mouseX, mouseY)
  ripplers.push(new Rippler(mouseX, mouseY)); 
}
