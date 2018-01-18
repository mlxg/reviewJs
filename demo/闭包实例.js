function a() {
    var i = 0;

    return function () {
        console.log(++i);
    };
}

var c = a();//a返回了b的值
console.log(a());
c();
c();
c();

const b = (i = 0) => () => console.log(++i);

const d = b();

d();
d();
d();
d();