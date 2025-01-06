const numbers = [3, 5, 7, 9];
let sum = numbers.reduce((n, total) => n + total);
console.log(sum);
let product = numbers.reduce((n, multiplication) => n * multiplication);
console.log(product);
let concatenatedString = numbers.reduce((n1, n2) => `${n1}-${n2}`);
console.log(concatenatedString);