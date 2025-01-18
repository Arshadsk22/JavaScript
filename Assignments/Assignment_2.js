class Rectangle {
    width;
    height;
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }
    areaRectangle() {
        console.log(`The area of Rectangle = ${this.width * this.height}`)
    }
    patternGenerator(char) {
        let str = '';
        for (let i = 1; i <= this.width; i++) {
            str = str + ' ' + char;
        }
        for (let i = 1; i <= this.height; i++) {
            console.log(str)
        }
    }
}
let result = new Rectangle(5, 6);
result.areaRectangle();
result.patternGenerator('*');