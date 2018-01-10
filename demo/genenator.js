//斐波那契数列

function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (;;) { // 这里请思考：为什么这个循环不设定结束条件？
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (let n of fibonacci()) {
    if (n > 1000) {
        break;
    }
    console.log(n);
}

