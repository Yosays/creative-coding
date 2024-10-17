//function preload(){
  // load the image from a file
	//img = loadImage();
//}

function setup() {

  // create the canvas
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(220);
  
  
 
  let noiseScale = 0.02;



  for (let x = 0; x < 1; x++){

    for (let y = 0; x < 1; y++){
      let n = noise(x * noiseScale, y * noiseScale) * 255;
      //noise(x,y);
      stroke(n, 0, 255 - n);
      strokeWeight(10);
      point(x * 10, y * 10);
      
  // render the image
  //image(img,10,10,100,100);
    }
  }
}
