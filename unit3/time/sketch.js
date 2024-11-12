let secondLineHeight = map(second(), 0, 59, 0, 300);;
let minuteLineHeight;
let hourLineHeight;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  textSize(25);
  text("hour: " + hour(), 50, 50);
  text("minute: " + minute(), 50, 100);
  text("second: " + second(), 50, 150);

  // Scale up the second line's height each second
  //secondLineHeight = map(second(), 0, 59, 0, 300); // 0 to 300 pixels high
  line(100, 650, 100, 650 - secondLineHeight); // Grows upward from 650

  // Scale up the minute line's height each minute
  minuteLineHeight = map(minute(), 0, 59, 0, 300); // 0 to 300 pixels high
  line(300, 650, 300, 650 - minuteLineHeight); // Grows upward from 650

  // Scale up the hour line's height each hour
  hourLineHeight = map(hour(), 0, 23, 0, 300); // 0 to 300 pixels high
  line(500, 650, 500, 650 - hourLineHeight); // Grows upward from 650
}
