// Get references to the input, button, and output elements
const inputText = document.getElementById("inputText");
const convertButton = document.getElementById("convertButton");
const output = document.getElementById("output");

// Function to convert underscore_case to camelCase
function convertToCamelCase(text) {
  const words = text.split("\n"); // Split by new lines
  let result = "";

  for (const word of words) {
    const parts = word.split("_"); // Split by underscores
    for (let i = 0; i < parts.length; i++) {
      if (i === 0) {
        result += parts[i];
      } else {
        result += parts[i][0].toUpperCase() + parts[i].slice(1);
      }
    }
    result += " ✅".repeat(parts.length - 1) + "\n"; // Add checkmarks
  }

  return result.trim(); // Remove trailing newline
}

// Event listener for the button click
convertButton.addEventListener("click", () => {
  const inputTextValue = inputText.value;
  const camelCaseText = convertToCamelCase(inputTextValue);
  output.textContent = camelCaseText;
});
