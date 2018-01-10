/**
 * Created by Rhee on 2017/5/26.
 */


function foo() {
    bar.apply(this, arguments);
}

function bar(a, b, c) {
    return a + b + c;
}

foo(1, 2, 3);