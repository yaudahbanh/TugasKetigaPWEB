let show = (value) => {
    document.getElementById('display').value += value;
}

function handleOperator(operator) {
  const display = document.getElementById("display");
  display.value += operator;
}

function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

function calculate() {
  const display = document.getElementById("display");
  let expression = display.value;

  if (expression.includes("/")) {
    const operands = expression.split("/");
    const numerator = parseFloat(operands[0]);
    const denominator = parseFloat(operands[1]);

    if (denominator !== 0) {
      const result = numerator / denominator;
      display.value = result;
    } else {
      display.value = "Error: Division by zero";
    }
  } else {
    const result = eval(expression);
    display.value = result;
  }
}
