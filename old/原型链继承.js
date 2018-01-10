/**
 * Created by Rhee on 2017/5/25.
 */

function Parent(name) {
    this.name = name;
}

Parent.prototype.getName = function () {
    return this.name;
};

function Child(name) {
    Parent.call(this, name);
}

Child.prototype = new Parent();

const child = new Child('k');

child.getName();