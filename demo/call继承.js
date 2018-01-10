function Parent(name) {
    this.name = name;
    this.sayParent = function () {
        console.log("Parent:" + this.name);
    }
}

function Child(name, age) {
    Parent.call(this, name)//*
    this.age = age;
    this.sayChild = function () {
        console.log("Child:" + this.name + " age:" + this.age);
    }
}

const parent = new Parent("江剑臣");
parent.sayParent(); //输出：“Parent:江剑臣”
const child = new Child("李鸣", 24); //输出：“Child:李鸣 age:24”
child.sayChild();