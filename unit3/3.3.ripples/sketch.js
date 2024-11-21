let ripple_x = 0;
let ripple_y = 0;
let ripple_d = 0;


let ripplers = [];


class Rippler {
  constructor (x,y){
    this.x = x,
    this.y = y,
    this.d = 0
    
  }
  draw(){
    this.d += 1;
    stroke(51, 123, 212);
    strokeWeight(1);
    noFill();
    circle (this.x, this.y, this.d);
  }
}



function setup() {
  createCanvas(800, 800);
}


function draw() {
background(52, 134, 235);


for (let i = 0; i < ripplers.length; i++){
  ripplers[i].draw();
}

}

function mousePressed(){

    ripple_x = mouseX;
    ripple_y = mouseY;
    ripple_d = 0;

  ripplers.push(new Rippler(mouseX, mouseY));  
}

