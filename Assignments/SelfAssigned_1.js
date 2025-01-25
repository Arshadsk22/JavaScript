function largestAndSamllest(arr) {
    let largest = arr[0];
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return { largest, smallest }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = largestAndSamllest(numbers)
console.log(`largest number:${result.largest}`)
console.log(`smallest number:${result.smallest}`)
