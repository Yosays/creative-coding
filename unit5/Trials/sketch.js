// I choose to use an array to keep track of the followers so I can control the amount I want on the screen at any time
let followers = []; // Array to store follower positions
let speedfactor = 0.05; // Speed of followers
let score = 0;
let img;
let safeZone1, safeZone2; // Two safe zone objects
let img1;
let img2;
let lastFollowerAddTime = 0; // Track last time a follower was added
let followerAddInterval = 5000; // Interval to add followers (5 seconds)
let myFont; // New font style for score

// I called this trials because they way the sprite looks and the font reminded of undertale trials but
// more to it also reminded me of a type of korean comic called "Manwha" which is riddled with dungeon and
// reincarnation genre and leveling up and getting through near death expierences which reminded of that 
// when the follower increases

function preload() {
  img = loadImage('https://yosays.github.io/creative-coding/unit5/Trials/mmob.jpg'); // Follower sprite
  img1 = loadImage('https://yosays.github.io/creative-coding/unit5/Trials/deathscreen.jpg'); // Loser screen
  myFont = loadFont('https://yosays.github.io/creative-coding/unit5/Trials/PressStart2P-Regular.ttf'); // New font style I uploaded
}

function setup() {
  createCanvas(1660, 900); // Make canvas fit the full window
  followers.push({ x: random(width), y: random(height), size: 50, color: color(random(255), random(255), random(255)) }); // Add initial follower
  createSafeZones(); // Create the initial safe zones
}

function draw() {
  background('#121211'); // Set the game background to something similar to black so you can see the follower clearly  

  // Check for game win or loss
  if (score >= 150) {
    background('black');
    textSize(50);
    fill('white');
    textAlign(CENTER, CENTER);
    text("WINNER!!!!", width / 2, height / 2 - 50);
    textSize(30);
    text("Final Score: " + score, width / 2, height / 2 + 20);
    noLoop(); 
    return;
  } else if (score <= -10) {
    image(img1, 0, 0, width, height); // Set img1 as the background if you lose
    textSize(100);
    fill('pink');
    textAlign(CENTER, CENTER);
    text("GAME OVER!", width / 2, height / 2 - 68);
    textSize(50);
    text("Final Score: " + score, width / 2, height / 2 + 63);
    noLoop();
    return;
  }

  // Display score top left
  textSize(30);
  textFont(myFont);
  fill('white');
  textAlign(LEFT, TOP);
  text("score: " + score, 20, 20);

  // Draw pink circles as safe zones
  fill('pink');
  noStroke();
  ellipse(safeZone1.x, safeZone1.y, safeZone1.radius * 2);
  ellipse(safeZone2.x, safeZone2.y, safeZone2.radius * 2);

  // Add a new follower every 5 seconds (if below max limit)
  let currentTime = millis();
  if (currentTime - lastFollowerAddTime > followerAddInterval && followers.length < 10) {
    followers.push({ x: random(width), y: random(height), size: random(50, 100), color: color(random(255), random(255), random(255)) }); // Add new follower with random size and color
    lastFollowerAddTime = currentTime;
    speedfactor += .0075; // Increase speed factor over time
  }

  // Loop through each follower and update positions
  for (let i = 0; i < followers.length; i++) {
    let follower = followers[i];

    // Code to make follower track mouse cursor / Player
    follower.x += (mouseX - follower.x) * speedfactor;
    follower.y += (mouseY - follower.y) * speedfactor;

    // Calculate distance between follower and player (mouse)
    let d = dist(follower.x, follower.y, mouseX, mouseY);

    // If close to the player, decrease score and slightly grow the follower
    if (d < follower.size / 2) {
      score--; // Decrease score
      follower.size = map(d, 0, 50, follower.size, follower.size + 10); // Grow follower when close
    }

    image(img, follower.x - follower.size / 2, follower.y - follower.size / 2, follower.size, follower.size); // Make the follower increase in size when it comes into contact with player
  }
}

// Add safe zone interaction logic for mousePressed
function mousePressed() {
  let d1 = dist(mouseX, mouseY, safeZone1.x, safeZone1.y);
  let d2 = dist(mouseX, mouseY, safeZone2.x, safeZone2.y);

  // if statement to check if user clicks within the safe zone
  if (d1 < safeZone1.radius) {
    score += 10; // Increase score
    createSafeZone(1); // Relocate safe zone 1
  }

  if (d2 < safeZone2.radius) {
    score += 10; // Increase score
    createSafeZone(2); // Relocate safe zone 2
  }

  // Control the amount of followers
  if (followers.length > 10) {
    followers.pop(); // Remove the last follower
  }
}

// Function to create both safe zones when the sketch is loaded
function createSafeZones() {
  safeZone1 = createNewSafeZone();
  safeZone2 = createNewSafeZone();
}

// Function to relocate a specific safe zone
function createSafeZone(zoneNumber) {
  if (zoneNumber == 1) {
    safeZone1 = createNewSafeZone();
  } else if (zoneNumber == 2) {
    safeZone2 = createNewSafeZone();
  }
}

// Function to create a new safe zone with random position
function createNewSafeZone() {
  return {
    x: random(50, width - 50), // Make sure that they aren't too close to the edge of the screen
    y: random(50, height - 50),
    radius: 50 
  };
}

// Adjust canvas size and reposition elements when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); 
  for (let i = 0; i < followers.length; i++) {
    followers[i].x = constrain(followers[i].x, 0, width); // Constrain x position of followers
    followers[i].y = constrain(followers[i].y, 0, height); // Constrain y position of followers
  }
  createSafeZones(); // Recreate safe zones
}
