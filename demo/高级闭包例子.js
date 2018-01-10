function newClosure(someNum, someRef) {
    // Local variables that end up within closure
    let num = someNum;
    let anArray = [1, 2, 3];
    let ref = someRef;
    return function (x) {
        num += x;
        anArray.push(num);
        console.log('num: ' + num +
            '\nanArray ' + anArray.toString() +
            '\nref.someVar ' + ref.someVar);
    }
}

closure1 = newClosure(40, {someVar: 'closure 1'});

closure1(5);//等同于return
closure1(5);//上次执行的结果还保存着哦

//demo
const singleton = function () {
    let privateVariable;

    function privateFunction(x) {
        // ...privateVariable...
    }

    return {
        firstMethod: function (a, b) {
            // ...privateVariable...
        },
        secondMethod: function (c) {
            // ...privateFunction()...
        }
    };
}();//注意括号哦