let data = document.getElementById("source").innerText; 
let rm = RiTa.markov(2); 
let letter = select("#letter"); 


function preload() {
  
}

function setup() {
  l
  rm.addText(data);


  let lines = rm.generate(6); 


  letter.child(createP('My Dearest Harrington,'));


  for (let l = 0; l < lines.length; l++) {
    let paragraph = createP(lines[l]);
    letter.child(paragraph);
  }


  letter.child(createP('Sincerely,<br>Markov'));
}
