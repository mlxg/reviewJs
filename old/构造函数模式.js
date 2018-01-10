/**
 * Created by Rhee on 2017/5/25.
 */

function Person(name) {
    this.name = name;
    this.getName = function () {
        return this.name;
    };
}

const person1 = new Person('kv');

console.log(person1);