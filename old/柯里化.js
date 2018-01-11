const curry1 = function (fn) {
    return function (...args) {
        if (args.length >= fn.length) {
            return fn.apply(null, args);
        } else {
            return function (...args2) {
                return fn.apply(null, args.concat(args2));
            };
        }
    };
};

//一行柯里化
curry = fn => (...args) => (...args2) => fn.apply(null, args.concat(args2));

add = (x, y) => x + y;
curryAdd = curry(add);

console.log(curryAdd(2)(3));