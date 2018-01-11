compose = (...args) =>  args.reduceRight((prev, cur) =>(...i) => cur(prev(...i)));


compose = (...args) => {
    const len = args.length;
    let count = len - 1;
    let result;
    return fi = (...arr) => {
        result = args[count].apply(this, arr);
        if (count <= 0) {
            count = len - 1;
            return result;
        } else {
            count--;
            return fi.call(null, result);
        }
    };
};

const greeting = (firstName, lastName) => `hello ${firstName} ${lastName}`;
const toUpper = str => str.toUpperCase();
const fn = compose(toUpper, greeting);
console.log(fn('jack', 'smith'));
