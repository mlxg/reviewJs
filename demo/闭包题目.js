const count = () => {
    for (let i = 0; i <= 5; i++) {//let是关键
        (function () {//包一层自执行行数，带参数
            return setTimeout(function () {
                console.log(i);
            }, i * 1000);//一个个输出
        })(i);
    }
};

count();