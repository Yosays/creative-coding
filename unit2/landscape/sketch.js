function setup() {
  createCanvas(800, 800);
  noLoop(); // Draw only once (no continuous redraw)
}


// I wanted to capture a foggy sunset that compliments the gray scale of the mountain
// I also made the further mountain a more transparent color to show that it is a farther distance away


function draw() {
  // Draw the gradient background
  // I used this for loop to blend the background between pink and blue and assign the colors to bgColor
  for (let y = 0; y < height; y++) {
    let blendAmount = map(y, 0, height, 0, 1);
    let bgColor = lerpColor(color(252, 228, 236), color(211, 233, 248), blendAmount); // Soft pink to pale blue
    stroke(bgColor);
    line(0, y, width, y); // Draw each horizontal line with the background color
  }


  // Draw the first mountain range (Layer 1)
  let layerCount1 = 1; // Number of layers for the first mountain range
  let noiseScale1 = 0.01; // Scale for the first mountain noise (small for smoother terrain)
  let baseHeight1 = height * 0.7; // Base height for the first mountain range
  for (let i = 0; i < layerCount1; i++) {
    let yOffset = i * 180; // Vertical offset to space the layers out
    let mountainColor1 = lerpColor(color(200), color(50), i / layerCount1); // Shades of grey, darker at the bottom
    fill(mountainColor1);
    noStroke();


    beginShape();
    vertex(0, height); // Start at the bottom-left of the canvas
    for (let x = 0; x <= width; x += 2) {
      let y = baseHeight1 + yOffset + map(noise(x * noiseScale1, i * noiseScale1), 0, 1, -150, 150);
      // I used noise to make the terrain look wavy and jagged to get more of the mountain look
      vertex(x, y); // Create vertices for mountain line
    }
    vertex(width, height); // End at the bottom-right
    endShape(CLOSE); // Close the shape to fill it
  }


  // Draw the second mountain range (Layer 2)
  let layerCount2 = 1; // Number of layers for the second mountain range
  let noiseScale2 = 0.03; // Scale for the second mountain noise (larger for rougher terrain)
  let baseHeight2 = height * 0.8; // Base height for the second mountain range (slightly lower)
  for (let i = 0; i < layerCount2; i++) {
    let yOffset = i * 220; // Vertical offset to space the layers out
    let mountainColor2 = lerpColor(color(180), color(30), i / layerCount2); // Different shades of grey for variation
    fill(mountainColor2);
    noStroke();


    beginShape();
    vertex(0, height); // Start at the bottom-left of the canvas
    for (let x = 0; x <= width; x += 2) {
      let y = baseHeight2 + yOffset + map(noise(x * noiseScale2, i * noiseScale2), 0, 1, -100, 100);
      // I used noise to make the terrain look wavy and jagged to get more of the mountain look
      vertex(x, y); // Create vertices for mountain line
    }
    vertex(width, height); // End at the bottom-right
    endShape(CLOSE); // Close the shape to fill it
  }
}





