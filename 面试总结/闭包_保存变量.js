function foo() {
    let i = 0;
    // return function () {
    //     console.log(i++);
    // };
    (function () {
        console.log(i++);
    })(i);
}

const foo1 = (i = 0) => () => console.log(++i);

const c = foo1();

c();
c();
c();
c();

//
const count = () => {
    for (let i = 0; i <= 5; i++) {//let是关键
        (function () {//包一层自执行行数，带参数
             setTimeout(function () {
                console.log(i);
            }, i * 1000);//一个个输出
        })(i);
    }
};

count();