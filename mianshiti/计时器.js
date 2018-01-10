//苟利国家生死以，岂因祸福避趋之（致敬楼上）
plusFor = (name, count = 0) => () => `为${name}续${++count}秒`;

const counter1 = plusFor('小明');
// => 为小明+1s
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());