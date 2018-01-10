// 递归

'use strict';

//函数+变量
const func = (n) => {
    if (n <= 1) {
        return 1;
    } else {
        return n * func(n - 1);
    }
};

// console.log(func(5))

const foo = (n) => {//fibonacci
    if (n <= 2) {
        return 1;
    } else {
        return foo(n - 1) + foo(n - 2);
    }
};

console.log(foo(6));
