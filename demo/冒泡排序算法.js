function bubble(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {//关键点i=j
            if (arr[i] < arr[j]) {
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
}

var arr1 = [1, 3, 2, 4]
bubble(arr1)

3124
4123
4213
4312
4321

//按照12,14,23,24,34对比排序