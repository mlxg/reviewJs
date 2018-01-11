// 定时器
function timer(params) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // resolve('resolve');
            reject('reject');
        }, params);
    });
}
/*
() => reject('1')等同于resolve
 */
timer = params => new Promise((resolve, reject) => setTimeout(resolve, params));

// async/await
async function fn(params) {
    try {
        await timer(params);
        console.log('reject');
    } catch (error) {
        console.log(error);
    }
}

fn(1000); //执行