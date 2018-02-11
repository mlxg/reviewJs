/**
 * 从ECMAScript规范解读this
 * Created by Rhee on 2017/5/26.
 */

/*
 var foo = {
 bar: function () {
 return this;
 }
 };

 foo.bar(); // foo*/

// -------------------------------

/*function foo() {
 return function() {
 return this
 }
 }

 foo()(); // MemberExpression 是 foo()*/

// ------------------------------

/*var value = 1;

 var foo = {
 value: 2,
 bar: function () {
 return this.value;
 }
 }

 a = (foo.bar, foo.bar)()*/

// =====================

function Cat() {

}

Cat.prototype = {
    food: 'fish',
    say: function () {
        console.log(this.food);
    }
};
console.log(typeof Cat)

const b = new Cat();
b.say();
const ed = new Cat();
b.say.call(ed, 's');