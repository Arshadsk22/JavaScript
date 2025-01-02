let fib = [];
for (let i = 0; i <= 7; i++) {
    if (i == 0 || i == 1)
        fib.push(i);
    else
        fib.push(fib[i - 1] + fib[i - 2]);
}
console.log(fib);