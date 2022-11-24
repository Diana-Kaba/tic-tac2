"use strict";
let tick = true;
let t;
let count = 0;


function ticker(n) {
  if (tick) {
    document.write("Тик ");
    tick = false;
  } else {
    document.write("Так ");
    tick = true;
  }
  count++;
  if (count === n) {
    clearInterval(t);
  }
  // if ((d1.getTime() - d.getTime()) / 1000 == n) {
  //   clearInterval(t);
  // }
}
t = setInterval(ticker, 1000, 20);
