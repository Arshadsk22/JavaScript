numbers = [5, 6, 7, 8, 9];
numbers.forEach(n => {
    for (i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
    console.log();
});