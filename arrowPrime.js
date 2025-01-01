let Prime = n => {
    let prime = true;
    for (i = 2; i < n / 2; i++) {
        console.log(i);
        if (n % i == 0) {
            prime = false;
            break;
        }
    }
    prime == true ? console.log(`${n} is a prime number`) : console.log(`${n} is not a prime number`);
};
Prime(997)