function extend(Child, Parent) {
    var F = function () {
    }
    F.prototype = Parent.prototype
    Child.prototype = new F()
    Child.prototype.constructor = Child
    Child.base = Parent.prototype
}

function Parent(name) {
    this.a = 1
    this.getName = function () {
        return name//闭包模拟私有成员
    }
    this.setName = function (name) {
        name = value
    }
}

Parent.prototype.print = function () {
    console.log('print!')
}
Parent.prototype.hello = function () {
    console.log(this.getName() + 'Parent')
}

function Child(name, age) {
    Parent.apply(this, arguments)//调用父类的构造函数 来继承
    this.age = age
}

extend(Child, Parent)
Child.prototype.hello = function () {//重写
    console.log(this.getName() + 'Child')
    Parent.prototype.hello.apply(this, arguments)//调用父类同名方法
}
Child.prototype.doSomeThing = function () {
    console.log(this.age + 'Child doSomeThing')
}
var p1 = new Child('xian', 22)
var p2 = new Child('xxx', 33)
p1.hello()
p2.hello()
p1.doSomeThing()
p1.print()
console.log(p1 instanceof Child)
console.log(p1 instanceof Parent)