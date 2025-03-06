let num: number = 6;
if ( num% 2 == 0)
    console.log("Even");
else
    console.log("Odd");


console.log();
console.log("2nd Question")
let threshold : number = 50.2
let products: number[] = [10.1, 50, 100.5, 75, 25.2, 64.3];
for (let i=0; i< products.length; i++){
    if(products[i] > threshold)
        console.log(products[i]);
}

console.log();
console.log("3rd Question");
let sum : number = 0;
let array: number [] = [1, 32, 16, 7 ,5];
for (let i=0; i< array.length; i++){
    sum += array[i];
}
console.log(`Sum: ${sum}`);
  