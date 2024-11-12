let newX, newY;
let newXspeed = 5, newYspeed = 5;
let x, y;
let xspeed = 5, yspeed = 5;
let color1, color2;

function setup() {
  createCanvas(400, 400);
  newX = random(25, 375);
  newY = random(25, 375);
  x = random(25, 375);
  y = random(25, 375);
  
  // Initialize colors for both circles
  color1 = color('black');
  color2 = color('purple');
}

function draw() {
  background(220);

  // Check for edge collision for the first circle
  if (x < 25 || x > width - 25) xspeed *= -1;
  if (y < 25 || y > height - 25) yspeed *= -1;

  // Check for edge collision for the second circle
  if (newX < 25 || newX > width - 25) newXspeed *= -1;
  if (newY < 25 || newY > height - 25) newYspeed *= -1;

  // Check for collision between the circles
  let distance = dist(x, y, newX, newY);
  if (distance <= 50) { // Sum of radii is 50
    // Reverse directions
    xspeed *= -1;
    yspeed *= -1;
    newXspeed *= -1;
    newYspeed *= -1;

    // Change colors on collision
    color1 = color(random(255), random(255), random(255));
    color2 = color(random(255), random(255), random(255));
  }

  // Update positions
  x += xspeed;
  y += yspeed;
  newX += newXspeed;
  newY += newYspeed;

  // Draw circles
  fill(color1);
  circle(x, y, 50);
  fill(color2);
  circle(newX, newY, 50);
}
