function greeting(name) {
    const text = 'Hello ' + name; // local variable
    // 每次调用时，产生闭包，并返回内部函数对象给调用者
    return function () {
        console.log(text);
        // return text
    };
}

const sayHello = greeting('Closure');
sayHello();  // 通过闭包访问到了局部变量text
