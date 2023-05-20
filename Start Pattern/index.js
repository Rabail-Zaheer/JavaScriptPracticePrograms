"use strict";
//HORIZONTAL

document.write("<h2> HORIZONTAL </h2>");
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) document.write("*");
}
document.write("</br>");

document.write("</br>");

//VERTICAL

document.write("<h2> VERTICAL </h2>");

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) document.write("*" + "</br>");
}
document.write("</br>");

// In increasing Order

document.write("<h2> IN AN INCREASING ORDER </h2>");
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) document.write("*");
  document.write("</br>");
}

document.write("</br>");

// In a Decreasing Order.

document.write("<h2>IN A DECREASING ORDER</h2>");

for (let i = 5; i >= 1; i--) {
  for (let j = i; j >= 1; j--) document.write("*");
  document.write("</br>");
}
