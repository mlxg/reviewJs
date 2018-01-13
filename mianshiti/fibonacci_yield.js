function* fibonacci() {
    let [prev, cur] = [0, 1];
    while (true) {//无限循环
        [prev, cur] = [cur, prev + cur];
        yield cur;
    }
}

for (let n of fibonacci()) {
    if (n > 1000) {
        break;
    }
    console.log(n);//小于1000的值
}

/*
fibonacci某一项的值,所有值
 */
fibonacci = n => n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);

fib = (n) => {
    for (let i = 1; i < n; i++) {
        if (fibonacci(i) > 1000) return;//小于1000的值
        console.log(fibonacci(i));
    }
};

console.log(fibonacci(10));//第10个值
fib(Infinity);//前10个值


