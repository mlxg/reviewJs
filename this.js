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

function cat() {

}

cat.prototype = {
    food: 'fish',
    say: function () {
        this.food
    }
}

var b = new cat()
b.say()
var ed = new cat()
b.say.call(ed,'s')