function buildList(list) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        let item = 'item' + list[i];
        result.push(function () {
            console.log(item + ' ' + list[i]);
        });
    }
    return result;

}

function testList() {
    let fnlist = buildList([1, 2, 3]);

    // using j only to help prevent confusion - could use i
    for (let j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}

testList();

//testList的执行结果是弹出item3 undefined窗口三次，
// 因为这三个函数绑定了同一个闭包，
// 而且item的值为最后计算的结果，
// 但是当i跳出循环时i值为4，
// 所以list[4]的结果为undefined.