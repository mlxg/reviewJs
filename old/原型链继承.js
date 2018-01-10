/**
 * Created by Rhee on 2017/5/25.
 */

function Parent(name) {
    this.name = name
}

Parent.prototype.getName = function () {
    this.name
}

function Child(name) {
    Parent.call(this,name)
}

Child.prototype = new Parent();

var child = new Child('k');

child.getName();