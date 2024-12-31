let n = 3;
for (let i = 1; i <= 50; i++) {
    let mul = i % n;
    if (mul == 0) {
        console.log('fizz')
    }
    else {
        console.log(i)
    }
}