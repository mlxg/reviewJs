function resolveAfter1Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 1000);
    });
}

async function f1() {
    try {
        await Promise.reject(30);
    } catch (e) {
        console.log(e);
    }
    const x = await resolveAfter1Seconds(10);
    console.log(x); // 10
}

f1();