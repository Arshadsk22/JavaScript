const arr1 = [12, 34, 56, 78, 90];
const arr2 = [23, 34, 45, 56, 67];
function commonFinder(arr1,arr2) {
    return arr1.filter(value => arr2.includes(value));
}
console.log(commonFinder(arr1,arr2))