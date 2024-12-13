function setup() {
  createCanvas(1200, 1200);
}

// This work when making it I was confused on what to call it due to it being random and 
// originally being black and purple so I messed around with the colors and background it 
// started to look like a dance floor they have on floors in malls using projecters leading 
// me to call it dance floor

function draw() {
  background(220);

  translate(220, 100);

  // Loop to create a grid of squares
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {

      push();
      // Move each square based on its position in the grid
      translate(x * 100, y * 100);

      // Randomly choose to change color for some squares
      if (random() > .05) {
        // Set a different color for some squares
        fill(random(100, 200), random(100, 200), random(100, 200));
      } else {
        // Default color for other squares
        fill(random(200, 255), random(0, 100), random(0, 100));
      }

      // I wanted to emphasize the stroke weight due to the base being too small
      // Random stroke weight for effect
      strokeWeight(random(2, 5));
      stroke(random(0, 255), random(0, 255), random(0, 255)); // Random stroke color

      // Draw square
      square(0, 0, 50); // Draw each square at its grid position

      pop();
    }
  }
}
