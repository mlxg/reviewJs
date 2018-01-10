/*
数字加逗号
 */

le = num => Number(num).toLocaleString();

commafy = num => {
    const arr = num.toString().split('.');
    const exg1 = /(?!\b)(?=(\d{3})+$)/g;
    const integer = arr[0].replace(exg1, ',');
    if (arr[1]) return integer + '.' + arr[1];
    return integer;
};

console.log(le(-409897900.88));
