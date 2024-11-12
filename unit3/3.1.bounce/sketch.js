let newX, newY;
let newXspeed = 3, newYspeed = 3;
let x, y;
let xspeed = 3, yspeed = 3;
let thirdX, thirdY;
let thirdXspeed = 3, thirdYspeed = 3;
let color1, color2, color3;

function setup() {
  createCanvas(400, 400);
  
  // Initialize positions
  newX = random(25, 375);
  newY = random(25, 375);
  x = random(25, 375);
  y = random(25, 375);
  thirdX = random(25, 375);
  thirdY = random(25, 375);

  // Initialize colors for all circles
  color1 = color('black');
  color2 = color('black');
  color3 = color('black');
}

function draw() {
  background(220);

  // Check for edge collision for the first circle
  if (x < 26 || x > width - 26) xspeed *= -1;
  if (y < 26 || y > height - 26) yspeed *= -1;

  // Check for edge collision for the second circle
  if (newX < 26 || newX > width - 26) newXspeed *= -1;
  if (newY < 26 || newY > height - 26) newYspeed *= -1;

  // Check for edge collision for the third circle
  if (thirdX < 26 || thirdX > width - 26) thirdXspeed *= -1;
  if (thirdY < 26 || thirdY > height - 26) thirdYspeed *= -1;

  // Check for collision between circle 1 and circle 2
  let distance1_2 = dist(x, y, newX, newY);
  if (distance1_2 <= 50) {
    xspeed *= -1;
    yspeed *= -1;
    newXspeed *= -1;
    newYspeed *= -1;
    color1 = color(random(255), random(255), random(255));
    color2 = color(random(255), random(255), random(255));
  }

  // Check for collision between circle 1 and circle 3
  let distance1_3 = dist(x, y, thirdX, thirdY);
  if (distance1_3 <= 50) {
    xspeed *= -1;
    yspeed *= -1;
    thirdXspeed *= -1;
    thirdYspeed *= -1;
    color1 = color(random(255), random(255), random(255));
    color3 = color(random(255), random(255), random(255));
  }

  // Check for collision between circle 2 and circle 3
  let distance2_3 = dist(newX, newY, thirdX, thirdY);
  if (distance2_3 <= 50) {
    newXspeed *= -1;
    newYspeed *= -1;
    thirdXspeed *= -1;
    thirdYspeed *= -1;
    color2 = color(random(255), random(255), random(255));
    color3 = color(random(255), random(255), random(255));
  }

  // Update positions
  x += xspeed;
  y += yspeed;
  newX += newXspeed;
  newY += newYspeed;
  thirdX += thirdXspeed;
  thirdY += thirdYspeed;

  // Draw circles
  fill(color1);
  circle(x, y, 50);
  fill(color2);
  circle(newX, newY, 50);
  fill(color3);
  circle(thirdX, thirdY, 50);
}
