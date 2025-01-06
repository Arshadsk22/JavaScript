const numbers = [4, 7, 12, 15, 9];
let modifiedNumbers = numbers.map(n => n % 2 == 0 ? n * 2 : n + 1);
let numberDescription = numbers.map(n => n % 2 == 0 ? n = 'Even' : n = 'odd');
console.log(modifiedNumbers);
console.log(numberDescription);