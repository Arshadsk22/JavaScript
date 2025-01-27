// This is a program which operates on an array of numbers or strings and find the duplicate values from the array
function removeDuplicates(arr) {
    let noDuplicate = [];
    for (let i = 0; i < arr.length; i++) {
        if (noDuplicate.includes(arr[i]) == false) {
            noDuplicate.push(arr[i]);
        }
    }
    return noDuplicate;
}
const numbers = [1, 2, 3, 3, 4, 5, 6, 6, 7, 7, 8, 9];
let noDuplicateArray = removeDuplicates(numbers);
console.log(noDuplicateArray);