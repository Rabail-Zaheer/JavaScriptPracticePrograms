"use strict";

function calculate() {
  let operator = prompt("select Operator (* + - /)");
  let num1 = parseInt(prompt("Enter first number"));
  let num2 = parseInt(prompt("Enter second number"));

  let total;

  if (operator == "*") {
    total = num1 * num2;
    document.write("The total is " + total);
  } else if (operator == "+") {
    total = num1 + num2;
    document.write("The total is " + total);
  } else if (operator == "-") {
    total = num1 - num2;
    document.write("The total is " + total);
  } else if (operator == "/") {
    total = num1 / num2;
    document.write("The total is " + total);
  } else {
    document.write("Incorrect Operator");
  }
}
