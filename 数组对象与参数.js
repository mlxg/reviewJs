/**
 * Created by Rhee on 2017/5/26.
 */



var arrayLike = {0: 'name', 1: 'age', 2: 'sex', length: 3}

// 2. splice
Array.prototype.splice.call(arrayLike, 0); // ["name", "age", "sex"]
// 3. ES6 Array.from
Array.from(arrayLike); // ["name", "age", "sex"]


var a = Array.from(arrayLike)
a

// 转数组
function foo(...arguments) {
    arguments
}
var  a =foo(1, 2, 3)
a
