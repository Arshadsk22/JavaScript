function fibonacci(n) {
    let first = 1;
    let second = 1;

    console.log(first);
    console.log(second);

    for (let i = 1; i <= n - 2; i++) {
        let sum = first + second;
        console.log(sum);
        second = first;
        first = sum;
    }
}
fibonacci(7);