arr = [
    {a: 1, b: 2},
    {c: 3, d: 4}
];

newArr1 = Object.assign([], arr);//浅拷贝，影响arr
newArr2 = JSON.parse(JSON.stringify(arr));//深拷贝，不影响arr,
// 拷贝一个字符串会新辟一个新的存储地址

// newArr1[0].a = 5;
newArr2[0].a = 6;

console.log(arr);
console.log(newArr2);
