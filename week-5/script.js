/****************************************************
 * Part 1: Variable Declarations and Conditionals
 ****************************************************/
let age = 20;            // Variable declaration using let
const country = "Kenya"; // Constant declaration using const
var isStudent = true;    // Older declaration using var

// Conditional statement example
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

/****************************************************
 * Part 2: Custom Functions
 ****************************************************/

// Function 1: Calculate the square of a number
function square(num) {
  return num * num;
}
console.log("Square of 5 is:", square(5));

// Function 2: Greet a user by name
function greet(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}
console.log(greet("Shadrack"));

/****************************************************
 * Part 3: Loops
 ****************************************************/

// Loop 1: For loop (counting from 1 to 5)
for (let i = 1; i <= 5; i++) {
  console.log("For loop count:", i);
}

// Loop 2: While loop (counting down from 5 to 1)
let count = 5;
while (count > 0) {
  console.log("While loop countdown:", count);
  count--;
}

/****************************************************
 * Part 4: DOM Interactions
 ****************************************************/

// DOM Interaction 1: Change text content
document.getElementById("title").innerText = "Updated Title with JS";

// DOM Interaction 2: Change style
document.getElementById("description").style.color = "blue";

// DOM Interaction 3: Add event listener to button
document.getElementById("btn").addEventListener("click", function() {
  alert("Button was clicked!");
});
