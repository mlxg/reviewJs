function add(x) {
    return function (y) {
        return x + y;
    };
}

add = x => y => x + y;

console.log(add(1)(2));