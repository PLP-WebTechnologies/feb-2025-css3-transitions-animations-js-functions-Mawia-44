// DOM elements
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");
const colorSelect = document.getElementById("colorSelect");
const saveColorBtn = document.getElementById("saveColorBtn");

// Animate on button click
animateBtn.addEventListener("click", () => {
  box.classList.add("animate");

  // Remove class after animation ends so it can trigger again
  box.addEventListener("animationend", () => {
    box.classList.remove("animate");
  }, { once: true });
});

// Save color to localStorage
saveColorBtn.addEventListener("click", () => {
  const selectedColor = colorSelect.value;
  localStorage.setItem("preferredColor", selectedColor);
  box.style.backgroundColor = selectedColor;
  alert(`Preferred color saved: ${selectedColor}`);
});

// Load saved color on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem("preferredColor");
  if (savedColor) {
    box.style.backgroundColor = savedColor;
    colorSelect.value = savedColor;
  }
});
