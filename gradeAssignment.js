const ps = require("prompt-sync");
const prompt = ps();

// Prompt user to input their score
let GRD = prompt("Input your score here: ");

// Convert the input to a number
let grade = parseInt(GRD);

// if else if statement to assign grades based on the following criteria
if (grade >= 90) {
    console.log("Excellent");
} else if (grade >= 80) {
    console.log("Good");
} else if (grade >= 70) {
    console.log("Fair");
} else {
    console.log("Needs Improvement");
}

