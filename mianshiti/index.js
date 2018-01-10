function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (; ;) {//无限循环
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (let n of fibonacci()) {
    if (n > 10) {
        break;
    }
    console.log(n);
}