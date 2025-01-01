let square = n => n * n;
console.log(square(6))

let area = (l,b) => l * b;
console.log(area(5,6))

let table = n => {
    for(i=1;i<=10;i++){
        console.log(`${n} * ${i} = ${n*i}`)
    }
}
table(5)

