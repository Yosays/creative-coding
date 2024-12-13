// check for push1
let poem = '';
let yPos = 900; // Initial Y position (starts offscreen)
let speed = 4; // Speed of scrolling
let newPoemTimer = 0; // Timer to control when to generate a new poem


// Grammar definitions using Tracery
let grammar = tracery.createGrammar({
  "origin": ["A PLAYER OF #type# #action# #trait# #result#"],
  "type": [
    "POWER WHO", "WISDOM WHO", "JOY WHO", "AMBITION WHO", "WILL WHO",
    "SOUL WHO", "SPIRIT WHO", "DRIVE WHO", "HONOR WHO", "FATE WHO",
    "DREAMS WHO", "STRENGTHS WHO", "CHANCES WHO", "SACRIFICES WHO", "PROMISE WHO",
    "TRUTH WHO", "UNITY WHO", "CHAOS WHO", "BALANCE WHO", "CLARITY WHO"
  ],
  "action": [
    "EXCELS", "QUESTIONS", "STRUGGLES", "AWAKENS", "ELEVATES",
    "CELEBRATES", "REVEALS", "DESTROYS", "SAVES", "IGNITES",
    "RESTORES", "PRESERVES", "SHINES", "DOMINATES", "ILLUMINATES",
    "THRIVES", "FIGHTS", "DREAMS", "SOARS", "HOPES"
  ],
  "trait": [
    "SKILL WHO", "STRENGTH WHO", "TACT WHO", "HUNGER WHO", "RELENTLESSNESS WHO",
    "GRIT WHO", "PASSION WHO", "VISION WHO", "FOCUS WHO", "DETERMINATION WHO",
    "CURIOSITY WHO", "CREATIVITY WHO", "HOPE WHO", "FEAR WHO", "PRIDE WHO"
  ],
  "result": [
    "WINS", "LOSES", "LEARNS", "BECOMES", "DEVOURS",
    "LURES ATTENTION", "INSPIRES", "CREATES", "CHALLENGES", "PROVES",
    "ENDURES", "RISKS", "IMAGINES", "ACHIEVES", "TRANSFORMS"
  ]
});


function setup() {
  createCanvas(800, 800);
  frameRate(30); //https://p5js.org/reference/p5/frameRate/
  textAlign(CENTER, CENTER);
  textFont("Impact");
  textSize(25);
  fill(0);
}


function draw() {
  background(220);
  // Move each quatrain up
  yPos -= speed;


  // I used this if statement to check how long the time has passed since the last poem was generated so it resets at the
  // right y value
  if (millis() - newPoemTimer > 5000) {
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



