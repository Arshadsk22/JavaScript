//area of square = n*n
//area of rectangle = l*w
//area of circle = 3.142*r*r
//volume of cylinder = 3.142*r*r*h

let areaSquare = (n) => {
    let result = n * n;
    return result;
};
console.log(areaSquare(5));

let areaRectangle = (l, w) => {
    let result = l * w;
    return result;
};
console.log(areaRectangle(5,4));

let areaCircle = (r) => {
    let result = 3.142 * r * r;
    return result;
};
console.log(areaCircle(5));

let volumeCylinder = (r, h) => {
    let result = 3.142 * r * r * h;
    return result;
};
console.log(volumeCylinder(5,4));
