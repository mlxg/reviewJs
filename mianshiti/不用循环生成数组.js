const arrWithoutLoop = (n) => /* TODO */ {
    const arr = [];
    const fn = n => {
        if (n > 0) {
            arr.push(n - 1);
            --n;
            return fn(n);
        }
    };
    fn(n);
    return arr.reverse();

};

const arrWithoutLoop01 = (n) => [...Array(n)].map((x, i) => i);

const arrWithoutLoop02 = (n) => Array.from(Array(n), (x, i) => i);

console.log(arrWithoutLoop(5));