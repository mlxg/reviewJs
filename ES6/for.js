const someArray = ['a', 'b', 'c'];

for (let i in someArray) {
    console.log(i, someArray[i]);//输出 a,b,c
}

for (let value of someArray) {
    console.log(value);//输出 a,b,c
}

