/**
 * Created by Rhee on 2017/5/25.
 */
let foo = function () {
    console.log(1);
};

foo();

foo = function () {
    console.log(2);
};

foo();

