/**
 * Created by Rhee on 2017/5/25.
 */
const value = 1;

function foo() {
    return value;
}

function bar() {
    const value = 2;
    console.log(`这里是${foo()}`);
}

bar();

console.log(value);