let rm = RiTa.markov(2);  // Creating th Markov model 
let letter;  

// Loading the text from the html code
let data = document.getElementById("source").innerText;


rm.addText(data);

function setup() {
   // Generate 6 lines repeatedly 
   let lines = rm.generate(6);

   // Find the #letter div and creates a new div elementDiv 
   letter = select("#letter");
   letter.html(""); // Clear any previous content

   // Add a salutation
   letter.child(createP('My Dearest Harrington,'));

   // Loop through the array of lines, adding each as a new <p> element
   for (let l = 0; l < lines.length; l++) {
       let paragraph = createP(lines[l]);
       letter.child(paragraph);
   }

   // Add a closing
   letter.child(createP('Sincerely,<br>Markov'));
}


function mousePressed() {
   // Remove the previous letter content and regenerate the letter
   letter.remove();

   // Create a new div for the letter and assign the ID 'letter'
   letter = createDiv();
   letter.id("letter");

   // Call setup to generate a new letter
   setup();
}
