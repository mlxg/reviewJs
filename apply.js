/**
 * call和apply的模拟实现
 * Created by Rhee on 2017/5/26.
 */

var foo = {
    value: 1,

}

function bar() {
    this.value
}

// foo.bar()

bar.call(foo)

// ---------------------------apply模拟

Function.prototype.apply = function (context, arr) {
    var context = Object(context) || window
    context.fn = this

    var result;
    if (!arr) {
        result = context.fn()
    } else {
        var args = []
        for (var i = 0; i < arr.length; i++) {
            args.push('arr[' + i + ']')
        }
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn
    return result
}


