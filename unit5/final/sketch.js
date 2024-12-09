let followers = []; // Array to store follower positions
let speedfactor = 0.05; // Speed of followers
let score = 0;
let img;
let safeZone1, safeZone2; // Two safe zone objects
let img1;
let img2;
let lastFollowerAddTime = 0; // Track last time a follower was added
let followerAddInterval = 5000; // Interval to add followers (5 seconds)
let myFont;

function preload() {
  img = loadImage('https://yosays.github.io/creative-coding/unit3/3.2.follower/Braiyn.jpg');
  img1 = loadImage('https://yosays.github.io/creative-coding/unit5/final/beast_boy_twerk_by_kiddo06_dftnmbv-pre.jpg');
  img2 = loadImage('https://yosays.github.io/creative-coding/unit5/final/chill%20guy.jpeg');
}

function setup() {
  createCanvas(1660, 900); // Make canvas fit the full window
  // Initialize with one follower
  followers.push({ x: random(width), y: random(height) });
  createSafeZones(); // Create the initial safe zones
}

function draw() {
  background('black'); // Set the game background

  // Check for game win or loss
  if (score >= 100) {
    background(img2);
    textSize(50);
    fill('white');
    textAlign(CENTER, CENTER);
    text("WIENNER!!!!", width / 2, height / 2 - 30);
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
  text
  textSize(30);
  fill('white');
  textAlign(LEFT, TOP);
  text("Score: " + score, 20, 20);

  // Draw the safe zones
  fill('pink');
  noStroke();
  ellipse(safeZone1.x, safeZone1.y, safeZone1.radius * 2);
  ellipse(safeZone2.x, safeZone2.y, safeZone2.radius * 2);

  // Add a new follower every 5 seconds (if below max limit)
  let currentTime = millis();
  if (currentTime - lastFollowerAddTime > followerAddInterval && followers.length < 10) {
    followers.push({ x: random(width), y: random(height) });
    lastFollowerAddTime = currentTime;
  }

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
    }
  }
}

// Check if the mouse is clicked inside either safe zone
function mousePressed() {
  let d1 = dist(mouseX, mouseY, safeZone1.x, safeZone1.y);
  let d2 = dist(mouseX, mouseY, safeZone2.x, safeZone2.y);

  if (d1 < safeZone1.radius) {
    score = score + 10; // Increase score
    createSafeZone(1); // Relocate safe zone 1

    // Remove a follower if there are too many
    if (followers.length > 1) {
      followers.pop(); // Remove the last follower
    }
  }

  if (d2 < safeZone2.radius) {
    score = score + 10; // Increase score
    createSafeZone(2); // Relocate safe zone 2

    // Remove a follower if there are too many
    if (followers.length > 1) {
      followers.pop(); // Remove the last follower
    }
  }
}

// Function to create both safe zones initially
function createSafeZones() {
  safeZone1 = createNewSafeZone();
  safeZone2 = createNewSafeZone();
}

// Function to relocate a specific safe zone
function createSafeZone(zoneNumber) {
  if (zoneNumber === 1) {
    safeZone1 = createNewSafeZone();
  } else if (zoneNumber === 2) {
    safeZone2 = createNewSafeZone();
  }
}

// Function to create a new safe zone with random position
function createNewSafeZone() {
  return {
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
  createSafeZones(); // Recreate safe zones
}
