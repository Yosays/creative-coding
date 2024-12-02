let poem = '';
let yPos = 800; // Initial Y position (starts offscreen)
let speed = 3; // Speed of scrolling
let newPoemTimer = 0; // Timer to control when to generate a new poem


// Grammar definitions using Tracery
let grammar = tracery.createGrammar({
 "origin": ["A PLAYER OF #type# #result#"],
 "type": ["SKILL WHO", "STRENGTH WHO", "TACT WHO", "HUNGER WHO", "RELENTLESSNESS WHO"],
 "result": ["WINS", "LOSES", "LEARNS", "BECOMES", "DEVOURS", "LURES ATTENTION", "INSPIRES"]
});


function setup() {
 createCanvas(800, 800);
 frameRate(30); // for smoother movement
 textAlign(CENTER, CENTER);
 textFont("Impact");
 textSize(40);
 fill(0);
}


function draw() {
 background(220); 
  // Move each quatrain up
 yPos -= speed;


 // Generate a new poem every 3 seconds
 if (millis() - newPoemTimer > 3000) {
   poem = grammar.flatten("#origin#"); // Generate the poem based on the grammar
   newPoemTimer = millis(); // Reset timer
   yPos = height; // Reset position of the next quatrain offscreen
 }


 // position of each poem
 text(poem, width / 2, yPos);


 // If the quatrain moves offscreen, reset it
 if (yPos < -40) {
   yPos = height; // Reset to start position offscreen for the next one
 }
}



