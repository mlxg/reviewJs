`es5`
    /*数组新增方法
    `use strict`
    `JSON 支持`

    数组新增了如下常用的方法：
    map
    every
    filter
    forEach
    indexOf
    reduce
    reduceRight
    some
    */

    `es6`;

/*
lambda表达式
class类
对象字面量
字符串模板
解构:自动解析数组或对象中的值
let与const 关键字
for of 值遍历(值遍历)
不定参数:...prama(reduce)
iterator, generator迭代器
Promises是处理异步操作的一种模式
 */
// -------------------------------------------------
class Animal {
    //ES6中新型构造器
    constructor(name) {
        this.name = name;
    }
    //实例方法
    sayName() {
        console.log('My name is ' + this.name);
    }
}

//类的继承
class Programmer extends Animal {
    constructor(name) {
        //直接调用父类构造器进行初始化
        super(name);
    }

    program() {
        console.log('I\'m coding...');
    }
}

//测试我们的类
var animal = new Animal('dummy');

// ------------------------------------------


//通过对象字面量创建对象
var human = {
    breathe() {
        console.log('breathing...');
    }
};
var worker = {
    __proto__: human, //设置此对象的原型为human,相当于继承human
    company: 'freelancer',
    work() {
        console.log('working...');
    }
};
human.breathe();//输出 ‘breathing...’
//调用继承来的breathe方法
worker.breathe();//输出 ‘breathing...’

// -------------------------------------
//产生一个随机数
var num=Math.random();
//将这个数字输出到console
console.log(`your num is ${num}`);

// -------------------------------------------------
//将所有参数相加的函数
function add(...x){
    return x.reduce((m,n)=>m+n);
}
//传递任意个数的参数
console.log(add(1,2,3));//输出：6
console.log(add(1,2,3,4,5));//输出：15