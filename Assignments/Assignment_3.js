const products = [
  { name: 'Laptop', price: 50000, stock: 15 },
  { name: 'Mobile', price: 15000, stock: 8 },
  { name: 'Headphones', price: 2000, stock: 20 },
  { name: 'Keyboard', price: 1000, stock: 5 }
];

console.log('Original Array:', products)

let filteredProducts = products.filter(product => product.stock > 10)
console.log('filtered Products:', filteredProducts)

let increasedPriceProducts = products.map(product => {
  return {
    name: product.name,
    price: (product.price * 1.15).toFixed(2),
    stock: product.stock,
  }
})
console.log('Increased prices of the Products:', increasedPriceProducts)
