// Initialize counter
let count = 0;

// Get HTML elements
// By Ids
const countLabel = document.getElementById("countLabel");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

// Increase counter by 1
increaseBtn.onclick = function(){
  count++;
  countLabel.textContent = count; // Update display
};

// Decrease counter by 1
decreaseBtn.onclick = function(){
  count--;
  countLabel.textContent = count; // Update display
};

// Reset counter to 0
resetBtn.onclick = function(){
  count = 0;
  countLabel.textContent = count; // Update display
};