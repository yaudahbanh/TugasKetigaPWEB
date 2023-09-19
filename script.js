// Get the elements
const display = document.getElementById('display');
const buttons = document.getElementsByClassName('buttons')[0];

// Add event listener to buttons container
buttons.addEventListener('click', function(event) {
  const button = event.target;
  const buttonText = button.innerText;

  if (buttonText === 'C') {
    // Clear the display
    display.value = '';
  } else if (buttonText === '=') {
    // Evaluate the expression
    try {
      const result = evaluateExpression(display.value);
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  } else {
    // Append the button's text to the display
    display.value += buttonText;
  }
});

// Custom function to evaluate expression
function evaluateExpression(expression) {
  // Split the expression using the divide operator '/'
  const parts = expression.split('/');

  // If there is only one part, return the expression as it is
  if (parts.length === 1) {
    return expression;
  }

  // If there are multiple parts, perform division
  let result = parseFloat(parts[0]);
  for (let i = 1; i < parts.length; i++) {
    const operand = parseFloat(parts[i]);
    if (operand !== 0) {
      result /= operand;
    } else {
      throw new Error('Division by zero');
    }
  }

  return result.toFixed(2); // Return the result with 2 decimal places
}