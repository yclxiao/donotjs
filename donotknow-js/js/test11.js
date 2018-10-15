let result = [1,2,3,4,5,6].reduce((x,y) => {
    return x + y;
});

console.log(result);

let a = 1;
let b = 2;
let c = b = a;
console.log(a);
console.log(b);
console.log(c);

let aaa = {
    k: 1
};

let bbb = {
    m: 2
}

let ccc = {
    n: 3
}
console.log(aaa);
console.log(bbb);
console.log(ccc);

let ddd = bbb = ccc;

console.log(aaa);
console.log(bbb);
console.log(ccc);
console.log(ddd);


console.log(bbb === ccc);
console.log(ddd === ccc);
console.log(ddd === bbb);
