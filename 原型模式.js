/**
 * Created by Rhee on 2017/5/25.
 */

function Person(name) {
    this.name = name
}
// Person.prototype.name = 'kevin'
// Person.prototype.getName = function () {
//     return this.name
// }

Person.prototype = {
    constructor: Person,
    // name: 'kevin',
    getName: function () {
        return this.name
    }

}
var person1 = new Person()

person1