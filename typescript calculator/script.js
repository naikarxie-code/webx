// script.js

const display = document.getElementById("display");
const history = document.getElementById("history");

// Add value to display
function appendValue(value) {
  display.value += value;
}

// Clear display and history
function clearDisplay() {
  display.value = "";
  history.textContent = "";
}

// Calculate result
function calculateResult() {
  try {
    const expression = display.value;
    const result = eval(expression);

    history.textContent = `${expression} = ${result}`;
    display.value = result;
  } catch {
    display.value = "Error";
  }
}