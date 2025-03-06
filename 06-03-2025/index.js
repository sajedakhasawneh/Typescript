var num = 6;
if (num % 2 == 0)
    console.log("Even");
else
    console.log("Odd");
console.log();
console.log("2nd Question");
var threshold = 50.2;
var products = [10.1, 50, 100.5, 75, 25.2, 64.3];
for (var i = 0; i < products.length; i++) {
    if (products[i] > threshold)
        console.log(products[i]);
}
console.log();
console.log("3rd Question");
var sum = 0;
var array = [1, 32, 16, 7, 5];
for (var i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log("Sum: ".concat(sum));
