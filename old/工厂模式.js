/**
 * Created by Rhee on 2017/5/25.
 */

function createPerson(name) {
    var o = new Object()
    o.name = name
    o.getName = function () {
        return this.name
    }
    return o
}
var person1 = createPerson('kevin')
