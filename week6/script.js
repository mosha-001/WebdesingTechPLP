// =========================
// Light/Dark Mode Toggle
// =========================
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// =========================
// Counter Game
// =========================
let count = 0;
const countValue = document.getElementById("countValue");
document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  countValue.textContent = count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  countValue.textContent = count;
});

// =========================
// Collapsible FAQ
// =========================
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(q => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// =========================
// Form Validation
// =========================
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form from submitting immediately

  let valid = true;

  // Name Validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must be at least 3 characters.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email Validation (regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password Validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // If valid, show success
  if (valid) {
    alert("✅ Form submitted successfully!");
    this.reset();
  }
});
