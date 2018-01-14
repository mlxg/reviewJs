/**
 * 利用Generator函数，可以在任意对象上部署iterator接口
 * @param obj
 */

function* iterEntries(obj) {
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        yield [key, obj[key]];
    }
}

let myObj = {foo: 3, bar: 7};

for (let [key, value] of iterEntries(myObj)) {
    console.log(key, value); //输出：foo 3 ， bar 7
}