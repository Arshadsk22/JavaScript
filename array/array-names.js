let arrayNames = ['Arshad', 'Suhaim', 'Mughni', 'Imran', 'Mohseen'];
for (let i = 0; i < arrayNames.length;i++) {
    let name2 = arrayNames.pop();
    arrayNames.unshift(name2);
    console.log(name2);
}
// for (let i = 0; i < arrayNames.length;) {
//     let name2 = arrayNames.pop();
//     console.log(name2);
// }