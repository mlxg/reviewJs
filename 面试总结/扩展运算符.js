var foo = function (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    // console.log(d);
};

var arr = [1, 2, 3];

foo(...arr);

//数组深拷贝
var arr2 = arr;
var arr3 = [...arr];
console.log(arr === arr2); //true, 说明arr和arr2指向同一个数组
console.log(arr === arr3); //false, 说明arr3和arr指向不同数组

//把一个数组插入另一个数组字面量
var arr4 = [...arr, 4, 5, 6];
console.log(arr4);//[1, 2, 3, 4, 5, 6]

//字符串转数组
var str = 'love';
var arr5 = [...str];
console.log(arr5);//[ 'l', 'o', 'v', 'e' ]

// rest运算符

//主要用于不定参数，所以ES6开始可以不再使用arguments对象
var bar = function (...args) {
    for (let el of args) {
        console.log(el);
    }
};

bar(1, 2, 3, 4);
//1
//2
//3
//4

bar = function (a, ...args) {
    console.log(a);
    console.log(args);
};

bar(1, 2, 3, 4);
//1
//[ 2, 3, 4 ]

