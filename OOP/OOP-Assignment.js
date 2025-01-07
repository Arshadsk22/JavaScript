class product {
    Name;
    Price;
    Quantity;

    constructor(name, price, quantity) {
        this.Name = name;
        this.Price = price;
        this.Quantity = quantity;
    }

    calculateTotalValue() {
        console.log (`${this.price=this.Price * this.Quantity}`);
    }
    applyDiscount(discountPercentage) {
        let discount = this.Price * (discountPercentage / 100);
        console.log (`${this.Price=this.Price - discount}`);
    }
    restock(newQuantity) {
        console.log(`${this.Quantity=this.Quantity + newQuantity}`);
    }
    productDetails(){
        console.log(`Name of the Product = ${this.Name}`);
        console.log(`Price of the Product = ${this.Price}`);
        console.log(`Stock of the Product = ${this.Quantity}`);
    }
}
const product1 = new product("Laptop", 900, 5);
const product2 = new product("Smartphone", 700, 8);
const product3 = new product("Shoes", 120, 15);

product1.productDetails();
product1.calculateTotalValue();
product1.applyDiscount(5);
product1.restock(10);