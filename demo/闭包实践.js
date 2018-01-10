(function () {
    const a = 10;
    const b = 20;

    function add(num1, num2) {
        num1 = !!num1 ? num1 : a;
        num2 = !!num2 ? num2 : b;

        return num1 + num2;
    }

    this.add = add;//方法add被作为一个闭包，对外暴露了一个公共方法
})();

console.log(add(10, 20));