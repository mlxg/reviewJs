//构造函数的prototype与所有实例对象的__proto__都指向原型对象。
// 而原型对象的constructor指向构造函数

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function () {
        return 'f' + this.name //先访问实例自身属性方法
    }

}

Person.prototype.getName = function () {//通过prototype属性，将方法挂载到原型上
    return 's' + this.name
};

const p1 = new Person('tim', 20);
console.log(p1.getName());
console.log('age' in p1);

//原型正确写法

function Person1(name) {
    this.name = name
}

Person1.prototype = {
    constructor: Person1,
    getName: function () {
       return this.name
    }
}


const p2 = new Person1('ok')
console.log(p2.getName())
