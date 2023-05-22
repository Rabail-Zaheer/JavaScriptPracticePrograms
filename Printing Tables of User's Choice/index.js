"use strict";

function printtables() {
  let total;
  let num = prompt("Enter a Number of your choice");

  for (let i = 1; i <= 10; i++) {
    for (let j = i; j <= i; j++) {
      total = i * num;
      document.write(`${num} * X ${j} = ${total} `);

      document.write("</br>");
    }
  }
}
