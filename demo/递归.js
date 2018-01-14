// 递归

'use strict';

//函数+变量
const func = (n) => {
    // if (n <= 1) {
    //     return 1;
    // } else {
    //     return n * func(n - 1);
    // }

    return n <= 1 ? 1 : n * func(n - 1);
};

console.log(func(5));

/*
fibonacci函数，爬楼梯一步或两步
 */
const foo = (n) => {
    if (n <= 2) {
        return 1;
    } else {
        return foo(n - 1) + foo(n - 2);
    }
};

console.log(foo(6));
