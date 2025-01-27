// program to print the numbers from 1 to 10 in reverse order
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    let number = numbers.pop();
    numbers.unshift(number)
    console.log(number);
}
