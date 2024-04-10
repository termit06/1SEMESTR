let y;

// C использованием цикла for
for (let x = -1; x <= 1; x+=0.1){
    y = Math.pow(2,-x) * Math.exp(x);
    console.log(y);
}

console.log("-----------------------------------");

// С использованием цикла while
let x = -1;

while(x <= 0.1){
y= Math.pow(2,-x) * Math.exp(x);
x += 0.1;
console.log(y);
}


console.log("-----------------------------------");

// С использованием цикла do while
x = -1;

do{
y = Math.pow(2,-x) * math.exp(x);
x += 0.1;
console.log(y);
} while (x <= 1)
