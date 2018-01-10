async function fn() {
    return 30;
}

fn = async () => 30;

fn().then(res => console.log(`${res}\n`));

console.log(fn());

/*
async/await
 */
fn = () => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve(30);
        }, 1000);
    }));
};

foo = async () => {
    const t = await fn();
    console.log(t);
    console.log(`nextcode\n`);
};

foo();

/*
异常处理 try/catch
 */
fn = () => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            reject(`error`);
        }, 1000);
    }));
};

foo = async () => {
    try {
        await fn();
    } catch (e) {
        console.log(e);
    }
};

foo();

/*
demo
 */

getUserInfo = () => $.get('xxx/api/xx');

clickHandle = async () => {
    try {
        const res = await getUserInfo();
        console.log(res);
        // todo
    }catch (e){
        // todo
    }
};


