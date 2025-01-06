let studentScores = [];
studentScores.push(45, 78, 88, 92, 56);
let mistakeNumber = studentScores.pop();
studentScores.push(67, 89);
let updatedScores = studentScores.map(n => n + 5);
console.log(studentScores);
console.log(updatedScores);