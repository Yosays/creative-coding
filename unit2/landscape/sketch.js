//function preload(){
  // load the image from a file
	//img = loadImage();
//}
/*
let color1 = 155; // Define color limits
let color2 = 1; // Define color limits
let color3 = 10; // Define color limits
*/

function setup() {

  // create the canvas
  createCanvas(800, 800);
  //noLoop();
  //background(220);
  colorStart = color(255,0,0);
<<<<<<< HEAD
  colorEnd = color(0,0,155);
=======
  colorEnd = color(0,0,255);
>>>>>>> f9b3275a7568b495a4c0100e97bb008370d61d78

}
function draw() {
  
  
  //strokeWeight(1);

  //for (let i = 0; i < 100; i++) {
    //let x = random(width);
    //let y = random(height);

    //stroke (random(255), random(255), random(255));
    //point(x, y);
  //}



 
  let noiseScale = 0.05;
<<<<<<< HEAD
  strokeWeight(4);



for (let x = 0; x < width; x+= 1){
    for (let y = 0; y < height; y+= 1){
=======
  strokeWeight(3);



for (let x = 0; x < width; x+= 5){
    for (let y = 0; y < height; y+= 5){
>>>>>>> f9b3275a7568b495a4c0100e97bb008370d61d78
      
    
      let noiseValue = noise(x * noiseScale, y * noiseScale);
      let offsetX = noiseValue * 10;
      let offsetY = noiseValue * 1000;
      
<<<<<<< HEAD
      let blendAmount = map(y, 0, height, 0, 1);
=======
      let blendAmount = map(noiseValue, 0, 1, 0, 1);
>>>>>>> f9b3275a7568b495a4c0100e97bb008370d61d78

      /*let c1 = random(155);
      let c2 = random(1);
      let c3 = random(10);
      */
      let blendedColor = lerpColor(colorStart, colorEnd, blendAmount);

<<<<<<< HEAD
      
=======
>>>>>>> f9b3275a7568b495a4c0100e97bb008370d61d78
      stroke(blendedColor);
      point(x + offsetX, y + offsetY);
      
      
  // render the image
  //image(img,10,10,100,100);
          }
        }
      }
    