//作用域链

//编译阶段 => 确定作用域
//执行阶段 => 执行上下文，变量对象，作用域链，以及this的值会分别被确定(闭包)，出栈压栈

//作用域链的定义，是由当前环境与上层环境的一系列变量对象组成，
// 它保证了当前执行环境对符合访问权限的变量和函数的有序访问。

//闭包的定义：当函数可以记住并访问所在的作用域(全局作用域除外)时，
// 就产生了闭包，即使函数是在当前作用域之外执行。

//函数A在函数B的内部进行定义了，并且当函数A在执行时，
// 访问了函数B内部的变量对象，那么B就是一个闭包。

//函数的执行上下文，在执行完毕之后，生命周期结束，
// 那么该函数的执行上下文就会失去引用。
// 其占用的内存空间很快就会被垃圾回收器释放。
// 可是闭包的存在，会阻止这一过程。

//垃圾回收机制：当一个值，在内存中失去引用时，垃圾回收机制会根据特殊的算法找到它，并将其回收，释放内存

let fn = null;

function foo() {
    const a = 2;

    function innnerFoo() {
        console.log(a);
    }

    fn = innnerFoo; // 将 innnerFoo的引用，赋值给全局变量中的fn
}

function bar() {
    fn(); // 此处的保留的innerFoo的引用
}

foo();
bar(); // 2