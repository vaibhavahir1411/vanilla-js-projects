let buttons = document.querySelectorAll("button");
let display = document.querySelector(".display");

expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.innerText;
    if (value === "AC") {
      expression = "";
    } else if (value === "⌫") {
      expression = expression.slice(0, -1);
    } else if (value === "×") {
      expression += "*";
    } else if (value === "÷") {
      expression += "/";
    } else if (value === "=") {
      try {
        expression = eval(expression);
      } catch {
        expression = "ERROR";
      }
    } else {
      expression += value;
    }
    display.value = expression;
  });
});

// Function to handle keyboard input
document.addEventListener("keydown", (event) => {
  let key = event.key;

  if (key === "Escape") {
    // AC key
    expression = "";
  } else if (key === "Backspace") {
    // Delete key
    expression = expression.slice(0, -1);
  } else if (key === "Enter" || key === "=") {
    // Equals key
    try {
      expression = eval(expression).toString();
    } catch {
      expression = "ERROR";
    }
  } else if (key === "*") {
    // Multiplication
    expression += "*";
  } else if (key === "/") {
    // Division
    expression += "/";
  } else if (!isNaN(key) || "+-.".includes(key)) {
    // Numbers & operators
    expression += key;
  }

  display.value = expression;
});
