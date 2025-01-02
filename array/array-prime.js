function primeFunc(n) {
    let prime = true;
    for (i = 2; i < n / 2; i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }
    }
    prime == true ? console.log(`${n} is a prime number`) : console.log(`${n} is not a prime number`);
}
let  arrayPrime= [3, 8, 5, 10, 7];
for (let i = 0; i < arrayPrime.length; i++) {
    primeFunc(arrayPrime[i]);
    console.log();
}