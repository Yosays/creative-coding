let followers = []; // Array to store follower positions
let speedfactor = 0.05; // Speed of followers
let score = 0;
let img;
let safeZone; // Safe zone object

function preload() {
  img = loadImage('https://yosays.github.io/creative-coding/unit3/3.2.follower/Braiyn.jpg');
}

function setup() {
  createCanvas(800, 800);
  // Initialize with one follower
  followers.push({ x: random(width), y: random(height) });
  createSafeZone(); // Create the initial safe zone
}

function draw() {
  // Check for game win or loss
  if (score >= 20) {
    // Winning condition
    background('green');
    textSize(50);
    fill('white');
    text("WINNER!!!!", width / 2 - 150, height / 2);
    textSize(30);
    text("Final Score: " + score, width / 2 - 100, height / 2 + 50);
    noLoop(); // Stop the draw loop
    return;
  } else if (score <= -200) {
    // Losing condition
    background('red');
    textSize(50);
    fill('white');
    text("GAME OVER!", width / 2 - 150, height / 2);
    textSize(30);
    text("Final Score: " + score, width / 2 - 100, height / 2 + 50);
    noLoop(); // Stop the draw loop
    return;
  }

  background('black');

  // Display score
  textSize(30);
  fill('white');
  text("Score: " + score, 50, 50);

  // Draw the safe zone
  fill('white');
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
    score ++; // Increase score
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
