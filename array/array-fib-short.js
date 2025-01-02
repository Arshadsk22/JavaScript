let fib = [];
for (let i = 0; i <= 7; i++) {
    i == 0 || i == 1 ? fib.push(i) : fib.push(fib[i - 1] + fib[i - 2]);
}
console.log(fib);