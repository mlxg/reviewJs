/**
 * 输入m.n参数，获取一个m长度的都是n的数组
 * @param m
 * @param n
 * @returns {Array}
 */

const initArray = (m, n) => {
    /* TODO */
    let arr = [];
    fn = m => {
        if (m > 0) {
            arr.push(n);
            return fn(m - 1);
        }
    };
    fn(m);
    return arr;
};

initArray(4, 2);
