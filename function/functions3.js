let n = 5;
let fact = 1;
function factorial(n) {
    for (let i = n; i > 1; i--) {
        console.log(i)
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(n))