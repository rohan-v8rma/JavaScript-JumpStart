let obj = {
    a: 22,
    b: 24
};

const { c, d } = obj; // c and d are undefined

console.log(c);
console.log(d);

const { a, b } = obj; // a and b are 22 and 24, respectively

console.log(a);
console.log(b);
