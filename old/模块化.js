const module1 = (function () {
    const N = 5;

    //私有属性
    function print(c) {
        return c;
    }

    function add(a) {
        const x = a + N;
        print(x);//print是私有属性访问不到
        // return x;
    }

    //公有属性
    return {
        description: 'this is description',
        add: add
    };
})();

console.log(module1.add(1));//私有属性访问不到
