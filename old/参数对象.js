/**
 * Created by Rhee on 2017/5/26.
 */


function foo() {
    bar.apply(this, arguments)
}
function bar(a, b, c) {
    var s = a + b + c
    return s
}

foo(1, 2, 3)