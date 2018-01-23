function extend(json, prop) {
    function F() {
    }

    if (typeof json === 'function') {
        F.prototype = json.prototype;
        for (var i in prop) {
            F.prototype[i] = prop[i];
        }
    }
    if (typeof json === 'object') {
        for (var j in json) {
            F.prototype[j] = json[j];
        }
    }
    return F;
}

var Person = extend({
    a: 'a',
    b: 'b'
});

var Student = extend(Person, {
    c: 'c',
    d: 'd'
});
var s = new Student();

console.log(s.a);
