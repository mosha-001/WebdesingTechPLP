// Part 2: Functions, Scope & Return Values
function multiply(a, b) {
  return a * b; // reusable logic
}

function logMessage(message) {
  let localVar = "Local: "; // local scope
  console.log(localVar + message);
}

let globalVar = "I am global"; // global scope

// Using the functions
logMessage("Hello World!");
console.log("Multiply 3 * 4 = " + multiply(3, 4));
console.log(globalVar);

// Part 3: Combining JS + CSS
const box = document.getElementById("animateBox");
const triggerBtn = document.getElementById("triggerBtn");

triggerBtn.addEventListener("click", () => {
  box.classList.toggle("animate"); // dynamically add/remove class
});

// Modal Logic
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
