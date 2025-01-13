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
        this.price = this.Price * this.Quantity;
        return this.price;
    }
    applyDiscount(discountPercentage) {
        let price2 = this.Price * this.Quantity;
        let discount = price2 * (discountPercentage / 100);
        this.Price = price2 - discount;
        return this.Price;
    }
    restock(newQuantity) {
        console.log(`${this.Quantity = this.Quantity + newQuantity}`);
    }
    productDetails() {
        console.log(`Name of the Product = ${this.Name}`);
        console.log(`Price of the Product = ${this.Price}`);
        console.log(`Quanity of the Product = ${this.Quantity}`);
    }
}
const product1 = new product("Laptop", 900, 5);
const product2 = new product("Smartphone", 700, 8);
const product3 = new product("Shoes", 120, 15);

product1.productDetails();
console.log('*****Bill*****');
console.log(`The price of ${product1.Quantity} ${product1.Name} = ${product1.calculateTotalValue()}`);
console.log(`Price After Applying Discount = ${product1.applyDiscount(5)}`);
// product1.restock(product1.Quantity);