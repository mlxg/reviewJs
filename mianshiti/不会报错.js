const safeGet = (data, path) => {// 可以安全的获取无限多层次的数据，一旦数据不存在不会报错，会返回 undefined
    if (!path) return undefined;
    let paths = path.split('.');
    let res = data;

    for (let i of paths) {
        if (res[i]) {
            res = res[i];
        } else {
            return undefined;
        }
    }
    return res;

};

const data = {a: {b: {c: 'ScriptOJ'}}};
console.log(safeGet(data, 'a.b.c'));