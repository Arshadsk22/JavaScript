const Students = [
    { name: 'Arshad', marks: 75 },
    { name: 'Suhaim', marks: 45 },
    { name: 'Mughni', marks: 65 },
    { name: 'Asrar', marks: 85 }
];
console.log('Original Array:', Students);

let students1=Students.filter(student1 => student1.name.startsWith('A') );
console.log('students whose name starts from letter A:',students1)

let firstClassStudents = Students.filter(student => student.marks > 60);
console.log('Students Scoring more than 60:', firstClassStudents);

let averageMarks = Students.reduce((total, student) => student.marks + total, 0) / Students.length;

console.log('Average Marks of the students:', averageMarks)