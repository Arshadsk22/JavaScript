class Rectangle {
    Length;
    Width;

    constructor(l, w) {
        this.Length = l;
        this.Width = w;
    }

    areaRectangle() {
        console.log(`Area of Rectangle = ${this.Length * this.Width}`);
    }
    perimeterRectangle() {
        console.log(`Perimeter of Rectangle = ${this.Length + this.Width}`);
    }
}
const rect1 = new Rectangle(5, 3);
const rect2 = new Rectangle(10, 5);
const rect3 = new Rectangle(20, 8);

const rectangles = [];
rectangles.push(rect1, rect2, rect3);

function printRectangles() {
    for (const rectangle of rectangles) {
        console.log(`Printing the details of Rectangle ${rectangle.Length} ${rectangle.Width}`);
        rectangle.areaRectangle()
        rectangle.perimeterRectangle()
        console.log(`--------------------------------------`)
        console.log();
    }
}
printRectangles();