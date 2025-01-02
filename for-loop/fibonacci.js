let f=1;
let s=1;
let sum=f+s;

console.log(f);
console.log(s);
console.log(sum);

for(let i = 0;i < 10;i++){
    f=sum+s;
    console.log(f);
    s=sum;
    sum=f;
}
