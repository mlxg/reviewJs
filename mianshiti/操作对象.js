/**
 * 操作对象
 * @type {{name: string, age: number, say: function(): string}}
 */

const obj = {
    name: 'n',
    age: 1,
    say: () => this.name
};
obj.length = 3;
delete obj.name;
for (let value in obj) {
    // console.log(value);
    console.log(obj[value]);
}