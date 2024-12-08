let followers = []; // Array to store follower positions
let speedfactor = 0.05; // Speed of followers
let score = 0;
let img;
let safeZone; // Safe zone object
let img1;

function preload() {
  img = loadImage('https://yosays.github.io/creative-coding/unit3/3.2.follower/Braiyn.jpg');
  img1 = loadImage('https://yosays.github.io/creative-coding/unit5/final/beast_boy_twerk_by_kiddo06_dftnmbv-pre.jpg');
}

function setup() {
  createCanvas(1660, 900); // Make canvas fit the full window
  // Initialize with one follower
  followers.push({ x: random(width), y: random(height) });
  createSafeZone(); // Create the initial safe zone
}

function draw() {
  background('black'); // Set the game background

  // Check for game win or loss
  if (score >= 20) {
    background('green');
    textSize(50);
    fill('white');
    textAlign(CENTER, CENTER);
    text("WINNER!!!!", width / 2, height / 2 - 30);
    textSize(30);
    text("Final Score: " + score, width / 2, height / 2 + 20);
    noLoop(); // Stop the draw loop
    return;
  } else if (score <= -200) {
    image(img1, 0, 0, width, height); // Set img1 as the background
    textSize(100);
    fill('pink');
    textAlign(CENTER, CENTER);
    text("GAME OVER!", width / 2, height / 2 - 30);
    textSize(50);
    text("Final Score: " + score, width / 2, height / 2 + 60);
    noLoop(); // Stop the draw loop
    return;
  }

  // Display score
  textSize(30);
  fill('white');
  textAlign(LEFT, TOP);
  text("Score: " + score, 20, 20);

  // Draw the safe zone
  fill('pink');
  noStroke();
  ellipse(safeZone.x, safeZone.y, safeZone.radius * 2);

  // Loop through each follower and update their position
  for (let i = 0; i < followers.length; i++) {
    let follower = followers[i];

    // Gradually move towards the mouse position
    follower.x += (mouseX - follower.x) * speedfactor;
    follower.y += (mouseY - follower.y) * speedfactor;

    // Draw the follower
    image(img, follower.x - 25, follower.y - 25, 50, 50);

    // Check if a follower catches the mouse
    let d = dist(follower.x, follower.y, mouseX, mouseY);
    if (d < 25) {
      score--; // Decrease score
      followers.push({ x: random(width), y: random(height) }); // Add a new follower
    }
  }
}

// Check if the mouse is clicked inside the safe zone
function mousePressed() {
  let d = dist(mouseX, mouseY, safeZone.x, safeZone.y);
  if (d < safeZone.radius) {
    score++; // Increase score
    createSafeZone(); // Create a new safe zone
  }
}

// Function to create a new random safe zone
function createSafeZone() {
  safeZone = {
    x: random(50, width - 50), // Ensure it's not too close to the edges
    y: random(50, height - 50),
    radius: 50 // Radius of the safe zone
  };
}

// Adjust canvas size and reposition elements when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Adjust canvas to new window size
  // Adjust safe zone and follower positions to stay within bounds
  for (let i = 0; i < followers.length; i++) {
    followers[i].x = constrain(followers[i].x, 0, width);
    followers[i].y = constrain(followers[i].y, 0, height);
  }
  createSafeZone(); // Recreate safe zone
}
