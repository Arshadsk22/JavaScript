class Car {
    brand;
    model;
    year;
    price;

    constructor(b, m, y, p) {
        this.brand = b;
        this.model = m;
        this.year = y;
        this.price = p;
    };
}
let car1 = new Car('Toyota', 'Supra mk4', 2001, 218000);
let car2 = new Car('Tata', 'Safari', 2018, 95000);
let car3 = new Car('Honda', 'City', 2018, 85000);
let car4 = new Car('Tata', 'Harrrier', 2023, 1500000);
let car5 = new Car('Ford', 'Endeavor', 2010, 100000);
let car6 = new Car('Toyota', 'Fortuner', 2015, 150000);

let cars = [];
cars.push(car1, car2, car3, car4, car5, car6);

const specificCar = cars.filter(car => car.brand == 'Toyota');
console.log(specificCar);

const avgPrice = cars.reduce((total, car) => car.price + total, 0) / cars.length;
console.log(`The Average price of all cars:${avgPrice}`);
