var z = 10;

function foo() {
    console.log(z);
}

(function (funArg) {
    var z = 20;
    funArg();
})(foo);

// const b = extend(A, prop);

const extend = (parent, attr) => {
    child = new Parent()

};


var $ = require('jquery');
var obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
var obj2 = $.extend(true, {}, obj1);
console.log(obj1.b.f === obj2.b.f);
// false

