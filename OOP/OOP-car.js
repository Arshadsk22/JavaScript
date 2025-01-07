class car {
    Model;
    Brand;
    Year;

    constructor(model, brand, year) {
        this.Model = model;
        this.Brand = brand;
        this.Year = year;
    }

    cardetails() {
       console.log(`This car is a ${this.Model} of ${this.Brand} from ${this.Year};`)
        }
}
const car1 = new car('Sufra', 'Toyota', '2001');
const car2 = new car('Endeavor', 'Ford', '2022');
car1.cardetails();
car2.cardetails();