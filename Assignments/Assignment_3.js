const Products=[
  {name:'Laptop',price:50000,stock:15},
  {name:'Mobile',price:15000,stock:8},
  {name:'Headphones',price:2000,stock:20},
  {name:'Keyboard',price:1000,stock:5}
];

console.log('Original Array:',Products)

let filteredProducts=Products.filter(Product=>Product.stock>10)
console.log('filtered Products:',filteredProducts)

let increasedProducts=Products.map(Product=>Product.price*0.15)
console.log('Increased prices of the Products:',increasedProducts)
