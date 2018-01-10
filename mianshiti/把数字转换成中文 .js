const toChineseNum = (num) => {
    const c = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    const a = ['', '十', '百', '千', '万', '十', '百', '千'];
    const len = num.toString().length;

    return num.toString().split('').map((value, index) => {
        if (index === len - 1 && value === '0') {//末尾是0
            return '';
        }
        return c[value] + a[len - 1 - index];
    }).join('').replace(/零[零十百千]+/g, '零').replace(/零万/, '万').replace(/零+$/, '');
};

console.log(toChineseNum(230450));