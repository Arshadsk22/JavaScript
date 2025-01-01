let n= 4;
function OddEven(n) {
    let rem = n % 2;
    if (rem == 0) {
        console.log(`${n} is a even number`)
    }
    else {
        console.log(`${n} is a odd number`)
    }
}
OddEven(n);