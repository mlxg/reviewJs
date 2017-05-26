/**
 * 函数外面在加多一层自执行函数就行啦
 * Created by Rhee on 2017/5/26.
 *
 */

var data = []

for (var i = 0; i < 3; i++) {
    data[i] = (function (i) {
        return function () {
            i
        }
    })(i)
}


data[0]()
data[1]()
data[2]()