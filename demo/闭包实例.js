function a() {
    var i = 0

    function b() {
        console.log(++i)
    }

    return b
}

var c = a()//a返回了b的值

c()