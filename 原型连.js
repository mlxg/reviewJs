/**
 * Created by Rhee on 2017/5/25.
 */
function Person() {
}
Person.prototype.name = 'k'

var p1 = new Person()

p1.__proto__.name

console.log(p1.__proto__)
console.log(p1.constructor)

console.log(Person.prototype.constructor)
console.log(Person.prototype)

