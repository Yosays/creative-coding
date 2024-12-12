
let ripplers = [];

class Rippler {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.d = 0; // assign d as zero to make the ripple start small than expand
  }

  // Method to draw the ripple effect
  draw() {
    this.d += 1; // Increase the diameter of the ripple on each frame
    stroke(51, 123, 212); // Set the color blue
    strokeWeight(1); 
    noFill(); 
    circle(this.x, this.y, this.d); // Draw the circle with the current diameter
  }
}


function setup() {
  createCanvas(800, 800); 
}

function draw() {
  background(52, 134, 235); // Make background light blue for a pond look

  // Loop through each rippler in the ripplers array and call its draw method
  for (let i = 0; i < ripplers.length; i++) {
    ripplers[i].draw(); 
  }
}

// Use the MousePressed function to capture where the user clicks and call for a rippler to be drawn
function mousePressed() {
  ripplers.push(new Rippler(mouseX, mouseY)); 
}
