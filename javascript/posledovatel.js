'use strict';

let x = Number(prompt("Введите x = "));
let y = +prompt("Введите y = ");

let a = (14 * Math.sin(x) + Math.pow(y,2))/(0.92 * Math.pow(Math.cos(x),3))

console.log(a);