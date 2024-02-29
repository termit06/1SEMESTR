let a = Number(prompt("Введите а = "));
let b = +prompt("Введите b = ");
let c = +prompt("Введите с = ");
let La = bis(a,b,c);

console.log(La);
function bis(A, B, C) {
    let la = (Math.sqrt(B*C*Math.pow(B+C,2) - Math.pow(A,2)))/(B+C);
return la;
}
