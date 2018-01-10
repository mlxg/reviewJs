const Person = function (name, age) {
    this.name = name;
    this.age = age;
    this.getName = function () {
        return this.name;
    }
}

function New(func) {
    let res = {}
    if (func.prototype !== null) {
        res.__proto__ = func.prototype
    }
    let ret = func.apply(res, Array.prototype.slice.call(arguments, 1))

    if ((typeof ret === 'object' || typeof ret === 'function') && ret !== null) {
        return ret
    }
    return res
}

const p1 = New(Person, 'tom', 20)

console.log(p1.getName())
console.log(p1 instanceof Person)

