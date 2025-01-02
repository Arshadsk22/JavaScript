function table(n) {
    for(i=1;i<=10;i++){
        console.log(`${n} x ${i} = ${n*i}`)
    }
}


let n = [2, 3, 4, 5, 6];
for (let i = 0; i < n.length; i++) { 
    console.log();
    console.log(`***** Multiplication Table of ${n[i]} *****`);
    table(n[i]); 
}