function setup() {
  createCanvas(800, 800);
  noLoop();
}


// At first I want to use points to along the canvas and fill in between them to create my landscape but 
// after multiple attempts I couldn't get anywhere. I knew I wanted to capture a mountain like look
// along complemntary pink background


function draw() {
  // Draw the gradient background
  for (let y = 0; y < height; y++) {
    let blendAmount = map(y, 0, height, 0, 1);
    let bgColor = lerpColor(color(252, 228, 236), color(211, 233, 248), blendAmount); // Soft pink to pale blue
    stroke(bgColor);
    line(0, y, width, y);
  }


  // Draw grey mountain-like layers
  let layerCount = 6;
  let noiseScale = 0.01; // Scale for noise
  for (let i = 0; i < layerCount; i++) {
    let yOffset = i * 120; // Space layers apart
    let mountainColor = lerpColor(color(50), color(200), i / layerCount); // Shades of grey
    fill(mountainColor);
    noStroke();


    beginShape();
    vertex(0, height); // Start at the bottom-left
    for (let x = 0; x <= width; x += 10) {
      let y = height * 0.5 + yOffset + map(noise(x * noiseScale, i * noiseScale), 0, 1, -100, 100);
      vertex(x, y); // Create vertices for mountain line
    }
    vertex(width, height); // End at the bottom-right
    endShape(CLOSE); // Close the shape to fill it
  }
}



