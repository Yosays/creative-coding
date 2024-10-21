function setup() {
  // create a canvas
  createCanvas(1200, 1200);

  // disable animation
  //noLoop();
}

function draw() {
  background(220);
// moves the grid to the right 100 pixels ahead of the loop 
translate(100,100);

  for (let x = 0; x < 8; x++){
    for (let y = 0; y < 8; y++){
      
      push();
      //
      translate(x * 100, y * 100);
      // I wanted to emphasize the stroke weight due to base being to small
      // 
      strokeWeight(random(10));
      // made 3 random varaibles each to compltet the value of R-G-B 
      stroke(random(100,255),random(50,255),random(0,255));
      // made the fill this color to give a better contrast 
      fill(190, 176, 165);
      ellipse(0,0,100,100);
      pop();

  }
}
}
