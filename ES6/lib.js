export const sqrt = Math.sqrt;

export function square(x) {
    return x * x;
}

export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

//main.js
import { square, diag } from './lib';
console.log(square(11)); // 121
console.log(diag(4, 3));