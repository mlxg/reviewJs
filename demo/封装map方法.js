Array.prototype._map = function (fn, context) {
    let tmp = [];
    if (typeof fn === 'function') {

        for (let i = 0; i < this.length; i++) {//封装for循环
            tmp.push(fn.call(context, this[i], i, this));
        }
    } else {
        console.error('TypeError:' + fn + 'is not a function');
    }
    return tmp;
};

const newArr = [1, 2, 3, 4]._map(fn);

function fn(item) {
    return item + 1;
}

console.log(newArr);