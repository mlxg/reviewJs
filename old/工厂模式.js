/**
 * Created by Rhee on 2017/5/25.
 */

function createPerson(name) {
    const o = {};
    o.name = name;
    o.getName = function () {
        return this.name;
    };
    return o;
}

const person1 = createPerson('kevin');

console.log(person1);
