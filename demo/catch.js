function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function f1() {
    try {
        let z = await Promise.reject(30)
    } catch (e) {
        console.log(e)
    }
    // let x = await resolveAfter2Seconds(10);
    console.log(x); // 10
}

f1();