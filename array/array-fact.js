function factorial(n) {
    let ans = 1;
    for (let i = 2; i <= n; i++) {
        ans *= i;
    }
    return ans;
}
let arrayFact = [5, 4, 6, 7, 8];
for (let i = 0; i < arrayFact.length; i++) {
    console.log(`${arrayFact[i]}! = ${factorial(arrayFact[i])}`)
}