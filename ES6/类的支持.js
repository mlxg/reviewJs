class A {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }

}

class P extends A {
    constructor(name) {
        super(name);
    }

    sayName() {
        console.log(this.name + 1);
    }

    static program() {//静态方法不能被实例继承
        console.log(1);
    }

}

const a = new P('1');
a.sayName();
P.program();


