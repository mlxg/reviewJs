function want() {
    console.log('这是你想要执行的代码');
}

function fn(want) {
    // console.log('这里表示执行了一大堆各种代码');

    // 返回Promise对象
    return new Promise(function (resolve, reject) {
        if (typeof want === 'function') {
            resolve();
        } else {
            reject('TypeError: ' + want + '不是一个函数');
        }
    }).then(function () {
        want();
    }).catch(function (err) {
        console.log(err);
    });
}

// fn(want);

fn('123');
