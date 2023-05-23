"use strict";

function displayTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  var amorpm = "AM";

  if (hour >= 12) {
    amorpm = "PM";
  }
  if (hour > 12) {
    hour = hour - 12;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  document.getElementById("clock").innerHTML =
    hour + ":" + min + ":" + sec + " " + amorpm;
}

setInterval(displayTime, 1000);
