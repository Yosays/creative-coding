//function preload(){
  // load the image from a file
	//img = loadImage();
//}

function setup() {

  // create the canvas
  createCanvas(800, 800);
  //noLoop();
  
}
background(220);
function draw() {
  
  
  
 
  let noiseScale = 0.02;



  for (let x = 0; x < 100; x++){
    for (let y = 0; y < 100; y++){
    
      let n = noise(x * noiseScale, y * noiseScale) * 255;
      //noise(x,y);
      //translate(x * 100, y *100);
      stroke('purple');
      strokeWeight(1);
      
      point(x * 10, y * 10);
      
      
  // render the image
  //image(img,10,10,100,100);
    }
  }
}
