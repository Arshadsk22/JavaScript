let fruits = ['mango', 'apple', 'watermelon', 'banana'];
let sales = [2000, 3000, 4000];
let totalsales = 0;

// Normal for loop
for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits);
}

// for-of loop
for (let sale of sales) {
    totalsales += sale;
}
// console.log(totalsales);

// for-in loop
for (let fruit in fruits) {
    // console.log(fruits[fruit]);
}

totalsales = 0;

// for-each loop
sales.forEach((sale, i) => {
    totalsales += sale;
    console.log(`Sales of day ${i + 1} = ${sale}`);
});
console.log(`Total sales = ${totalsales}`);
