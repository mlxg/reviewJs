pause = time => new Promise(resolve => setTimeout(resolve, time));

async function run() {
    console.log('Hello');
    await pause(1000); // 续一秒
    console.log('World'); // 一秒以后继续运行
}

run();

const fs = require('fs');

// 封装成 await 语句期望的 promise 对象
const readFile = function(){
    let args = arguments;
    return new Promise(function(resolve, reject){
        fs.readFile(...args, function(err, data){
            // await 会吸收 resolve 传入的值作为返回值赋给变量
            resolve(data);
        })
    })
};

const asyncReadFile = async function(){
    let dataA = await readFile('a.txt', {encoding: 'utf8'});
    console.log('dataA is %d', dataA);
    let dataB = await readFile('b.txt', {encoding: 'utf8'});
    console.log('dataB is %d', dataB);
    let dataC = await readFile('c.txt', {encoding: 'utf8'});
    console.log('dataC is %d', dataC);
    console.log('sum is %d', parseInt(dataA) + parseInt(dataB) + parseInt(dataC));
};

asyncReadFile();
console.log('异步执行');

// $ node index.js
// 异步执行
// dataA is 1
// dataB is 2
// dataC is 3
// sum is 6
