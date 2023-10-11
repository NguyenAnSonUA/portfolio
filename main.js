// Texts to display
const texts = ["web developer", "frontender", "coder"];

// Speed of typing (in milliseconds per character)
const typingSpeed = 100;

// Speed of clearing (in milliseconds per character)
const clearingSpeed = 80;

// Get the element where you want to display the typing effect
const typingElement = document.getElementById("intro-profession");

// Initialize variables to keep track of the current text and character
let currentTextIndex = 0;
let currentCharIndex = 0;

// Function to clear text
function clearText() {
  let index = typingElement.innerHTML.length - 1;

  // Use setInterval to remove characters one by one
  const clearingInterval = setInterval(() => {
    if (index >= 0) {
      typingElement.innerHTML = typingElement.innerHTML.slice(0, index);
      index--;
    } else {
      clearInterval(clearingInterval); // Stop when all characters are cleared
      currentCharIndex = 0; // Reset character index
      currentTextIndex++; // Move to the next text

      if (currentTextIndex >= texts.length) {
        currentTextIndex = 0; // Start from the beginning if all texts are displayed
      }
      setTimeout(typeNewText, 100); // Wait for a moment, then type new text
    }
  }, clearingSpeed);
}

// Function to type new text
function typeNewText() {
  const currentText = texts[currentTextIndex];

  // Use setInterval to add characters one by one
  const typingInterval = setInterval(() => {
    if (currentCharIndex < currentText.length) {
      typingElement.innerHTML += currentText.charAt(currentCharIndex);
      currentCharIndex++;
    } else {
      clearInterval(typingInterval); // Stop when all characters are typed
      setTimeout(clearText, 500); // Wait for a moment, then clear text
    }
  }, typingSpeed);
}

// Start the typing animation when the page loads
window.onload = typeNewText;
