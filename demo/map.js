const newArr = [1, 2, 3, 4].map(add, {a: 1});

function add(item, i, arr) {//item表示数组的值，i表示索引
    console.log(item, i, arr, this);
    return item + 1;
}

console.log(newArr);

//遍历数组的每一项元素，并且在map的第一个参数（回调函数）
// 中进行运算处理后返回计算结果。返回一个由所有计算结果组成的新数组。

newArr1 = [1, 2].map(item => item + 1,[]);

console.log(newArr1);