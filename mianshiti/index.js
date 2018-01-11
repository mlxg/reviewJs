pause = time => new Promise(resolve => setTimeout(resolve, time));

async function run() {
    console.log('Hello');
    await pause(1000); // 续一秒
    console.log('World'); // 一秒以后继续运行
}

run();
