new Promise(function (resolve, reject) {
    const timeOut = Math.random() * 2;
    setTimeout(function () {
        if (timeOut < 1) {
            console.log('call resolve()...');
            resolve('200 OK');
        }
        else {
            console.log('call reject()...');
            reject();
        }
    }, timeOut * 1000);
}).then(function (r) {
    console.log('Done: ' + r);
}).catch(function () {
    console.log('Failed: ');
});

//
// 0.5秒后返回input*input的计算结果:
function multiply(input) {
    return new Promise(function (resolve, reject) {
        console.log('calculating ' + input + ' x ' + input + '...');
        // setTimeout(resolve, 500, input * input);
        setTimeout(resolve(input * input), 500);//这种合理写法

    });
}

// 0.5秒后返回input+input的计算结果:
function add(input) {
    return new Promise(function (resolve, reject) {
        console.log('calculating ' + input + ' + ' + input + '...');
        setTimeout(resolve, 500, input + input);
    });
}

const p = new Promise(function (resolve, reject) {
    console.log('start new Promise...');
    resolve(123);
});

p.then(multiply)
    .then(add)
    .then(multiply)
    .then(add)
    .then(function (result) {
        console.log('Got value: ' + result);
    });
