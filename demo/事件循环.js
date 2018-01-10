setTimeout(function () {//任务源
    console.log('timeout1');
    foo();
});

new Promise(function (resolve) {
    console.log('promise1');
    for (let i = 0; i < 1000; i++) {
        i === 99 && resolve();
    }
    console.log('promise2');
}).then(function () {
    console.log('then1');


});

function foo() {
    new Promise(function (resolve) {
        console.log('promise3');
        for (let i = 0; i < 1000; i++) {
            i === 99 && resolve();
        }
        console.log('promise4');
    }).then(function () {
        console.log('then3');
    });
}

console.log('global1');
// promise1
// promise2
// global1
// then1
// timeout1