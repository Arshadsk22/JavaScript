function identifyVowelsAndConstants(phrase) {
    let vowels = 'aeiouAEIOU'
    let vowelsList = [];
    let constantsList = [];

    for (const char of phrase) {
        if (vowels.includes(char)) {
            vowelsList.push(char)
        }
        else{
            constantsList.push(char)
        }
    }

    console.log('Vowels:');
    for (const vowel of vowelsList) {
        console.log(vowel);
    }

    console.log('Constants:');
    for (const constant of constantsList) {
        console.log(constant);
    }
}
identifyVowelsAndConstants('hello World')
