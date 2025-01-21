const strings = ["apple", "banana", "cherry", "date", "elderberry", "fig",
    "grape"];

const longStrings = strings.filter(string => string.length > 5);
console.log(longStrings);

const upperCaseStrings = strings.map(string => string.toUpperCase());
console.log(upperCaseStrings);

const containsA = strings.filter(string => string.includes('a'));
console.log(containsA);

const string2 = ' - Processed';
const processedStrings = strings.map(string => string.concat(string2));
console.log(processedStrings);
