/**
 * 函数外面在加多一层自执行函数就行啦
 * Created by Rhee on 2017/5/26.
 *
 */
const data = [];

for (let i = 0; i < 3; i++) {

    data[i] = (function (i) {
        return function () {
            console.log(i)
        };
    })(i);
}

data[0]();
data[1]();
data[2]();