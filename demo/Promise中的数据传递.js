let fn = function (num) {
    return new Promise(function (resolve, reject) {
        if (typeof num === 'number') {
            resolve(num);
        } else {
            reject('typeError');
        }
    });
};

fn(2).then(num => {
    console.log('first:' + num);
    return num + 1;
}).then(num1 => {
    console.log('s:' + num1);
    return num1 + 1;
}).then(num2 => {
    console.log('t:' + num2);
    return num2 + 1;
});