function patternGenerator(char, num) {
    let patternChar = char;
    let numLines = num;
    let str = '';
    for (let i = 0; i < num; i++) {
        str = patternChar + ' ' + str;
        console.log(str);
    }
}
patternGenerator('*',8)