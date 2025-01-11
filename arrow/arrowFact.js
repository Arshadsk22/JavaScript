//the below code is the example of factorial using arrow function with recursion and without recursion
let fact = n => {
    if (n == 0) {
        return 1;
    }
    return n * fact(n - 1);
};
console.log(fact(5));


let factorial = n => {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
};
console.log(factorial(5));