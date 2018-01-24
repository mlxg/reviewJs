console.log(undefined == null);//true
console.log(undefined === null);//false
console.log(typeof null);//object
console.log(typeof undefined);//undefined

var obj = 1;

!function () {
    console.log(obj);
    var obj = 2;
    console.log(obj);
    console.log(window.obj);
    obj = 3;
    console.log(obj);
}();
