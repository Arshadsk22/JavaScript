let n = 997;
let prime = true;
let rem;
for (i = 2; i < n; i++) {
    rem = n / 2;
    if(i > rem){
        break;
    }
    rem = n % i;
    console.log(i);
    if (rem == 0) {
        prime = false;
        break;
    }
}
if (prime) {
    console.log('its is a prime')
}
else if (prime == false) {
    console.log('its is not a prime')

}