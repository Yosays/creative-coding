// Import the RiTa.js Markov model
let rm;


function setup() {
    noCanvas();


   
    rm = RiTa.markov(2);


    // Load the source text from the #source div
    let data = document.getElementById("source").innerText;


    // Add the source text to the Markov model
    rm.addText(data);


   
    generateLetter();
}

// Function "generateLetter" when called adds greeting and farewell

function generateLetter() {
   
    let lines = rm.generate(6);


    // Find the #letter div and clear it
    let letter = select("#letter");
    letter.html(""); // Clear previous content


    // Add greeting
    letter.child(createP("My Dearest Harrington,"));


    // Add each generated line as a paragraph
    for (let l = 0; l < lines.length; l++) {
        let paragraph = createP(lines[l]);
        letter.child(paragraph);
    }


    // Add a farewell
    letter.child(createP("Sincerely,<br>Markov"));
}


function mousePressed() {
    // Clear the page on mouse click
    select("#letter").remove();
    let letter = createDiv();
    letter.id("letter");
    letter.parent(document.body);
    setup();
}

