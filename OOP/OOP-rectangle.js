class Rectangle{
    Length;
    Width;

    constructor(l,w){
        this.Length=l;
        this.Width=w;
    }

    areaRectangle(){
        console.log(`Area of Rectangle = ${this.Length*this.Width}`);
    }
    perimeterRectangle(){
        console.log(`Perimeter of Rectangle = ${this.Length+this.Width}`);
    }
}
const rect = new Rectangle(5,6);
rect.areaRectangle();
rect.perimeterRectangle();