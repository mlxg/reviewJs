for (let i = 10; i <= 10000; i++) {
    const str = i.toString().split('');
    const arr = [];
    for (let j = 0; j < i.toString().length; j++) {
        arr.unshift(str[j]);//反转数组
    }

    const newArr = arr.join('');
    if (i.toString() === newArr) console.log(str.join(''));
}