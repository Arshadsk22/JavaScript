const numbers = [10, 20, 30, 40, 50];
let sum2 = 0;
numbers.forEach(sum => {sum2 += sum;});
console.log(sum2)

const numbers2 = [10, 21, 30, 41, 50];
for (const odd of numbers2) {
    if (odd % 2 !== 0) 
        console.log(`${odd} is Odd number`)
}
