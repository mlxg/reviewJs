const add1 = (x) => x + 1;
const mul3 = (x) => x * 3;
const div2 = (x) => x / 2;

div2(mul3(add1(add1(0)))); // => 3

compose = (...funs) => funs.reduceRight((prev, cur) => (...i) => cur(prev(...i)));//支持多参数

const operate = compose(div2, mul3, add1, add1);
console.log(operate(0)); // => 相当于 div2(mul3(add1(add1(0))))


const add = (x, y) => x + y;
const mul = x => x.toUpperCase();
// const op = mul(add('a', 'b'));
const op = compose(mul, add);
console.log(op('a', 'b'));




