function secondLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length-1; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return { largest }
}
const numbers = [23, 47, 58, 12, 91];
const result = secondLargest(numbers)
console.log(`largest number:${result.largest}`)