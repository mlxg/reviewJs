/**
 * Created by Rhee on 2017/5/25.
 */

var value =1

function foo() {
    value
}

function bar() {
    var value= 2
    foo()
}

bar()