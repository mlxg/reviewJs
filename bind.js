/**
 *  call()， apply() 都是立马就调用了对应的函数，而 bind() 会生成一个新的函数，
 *  bind() 函数的参数跟 call() 一致，第一个参数也是绑定 this 的值，后面接受传递给函数的不定参数。
 *  bind() 生成的新函数返回后，你想什么时候调就什么时候调
 * Created by Rhee on 2017/5/27.
 */


function foo(a, b) {
    return a + b
}
// foo.apply(m, [5]);
// foo.call(m, 5);

// var foo1 = foo.bind(m, 5)
// foo1()

var fun = foo.bind(fun, 5,2)()

// =====================


var m = {
    "x" : 1
};
function foo(y) {
    alert(this.x + y);
}
foo.apply(m, [5]);
foo.call(m, 5);
var foo1 = foo.bind(m, 5);
foo1();
