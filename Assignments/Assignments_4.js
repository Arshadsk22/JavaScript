const Students = [
    { name: 'Arshad', marks: 75 },
    { name: 'Suhaim', marks: 45 },
    { name: 'Mughni', marks: 65 },
    { name: 'Asrar', marks: 85 }
];
console.log('Original Array:', Students);

let firstClassStudents = Students.filter(student => student.marks > 60);
console.log('Students Scoring more than 60:', firstClassStudents);

let sumOfMarks = Students.reduce((total, student) => student.marks + total, 0)
let averageMarks = sumOfMarks / Students.length;

console.log('Total sum of Marks of the students:', sumOfMarks)
console.log('Average Marks of the students:', averageMarks)