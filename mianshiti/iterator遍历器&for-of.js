/**
 * 只要是一个对象部署了Symbol.interator接口，就可以用for...of遍历该对象，
 * 同时也可以调用该接口的Symbol.interator方法调用next()方法对对象进行遍历，
 * 不同的是for..of是对该对象的值的输出，而next()返回的是对象。
 */

/*
ES6很多地方都用的到Iterator这个接口，例如：
    解构赋值
    扩展运算符
    yield*
 */

class RI {
    constructor(start, stop) {
        this.value = start;
        this.stop = stop;
    }

    [Symbol.iterator]() {//iterator遍历器
        return this;
    }

    next() {
        const value = this.value;
        if (value < this.stop) {
            this.value++;
            return {done: false, value: value};
        } else {
            return {done: true, value: undefined};
        }
    }

}

range = (start, stop) => new RI(start, stop);

for (let value of range(0, 3)) {
    console.log(value);
}

/*
next方法
 */

const arr = [1, 2];
const it = arr[Symbol.iterator]();
console.log(it.next());//next()返回的是对象
console.log(it.next());
console.log(it.next());

/*
Symbol.iterator方法直接引用数组的Iterator接口。
 */

let iterable = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of iterable) {
    console.log(item); // 'a', 'b', 'c'
}

/*
for...of 区别于for循环，for循环比较麻烦，但是是最原始的方法；
for...of 区别于数组的forEach方法，因为forEach方法是从头到尾执行，不会跳出，
    但是遇到break或者return，continue会跳出循环
 */