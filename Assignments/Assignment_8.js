class Course {
    title;
    instructor;
    duration;
    level;

    constructor(t, i, d, l) {
        this.title = t;
        this.instructor = i;
        this.duration = d;
        this.level = l;
    };
}
let course1 = new Course('Python', 'John', 12, 'Beginner');
let course2 = new Course('Java', 'Sammy', 10, 'Intermediate');
let course3 = new Course('JavaScript', 'Henry', 8, 'Advanced');
let course4 = new Course('HTML', 'Suzy', 5, 'Beginner');

const allCourses = [];
allCourses.push(course1, course2, course3, course4);

const totalDuration = allCourses.reduce((total, time) => time.duration + total, 0);
console.log(totalDuration);

const levelBeginner = allCourses.filter(course => course.level == 'Beginner');
console.log(levelBeginner);