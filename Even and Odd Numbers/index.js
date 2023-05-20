"use strict";
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    document.write(`${i} is an even number`);
    document.write("</br>");
  } else if (i % 2 !== 0) {
    document.write(`${i} is an odd number`);
    document.write("</br>");
  }
}
