/*
进行四舍五入并计算总和
 */

sumN = i => i.reduce((total, num) => total + Math.round(num), 0);

const arr = [15.5, 2.3, 1.1, 4.7];
console.log(sumN(arr));

/**
 * 总值关联权重
 * @type {*[]}
 */
const result = [
    {
        subject: 'math',
        score: 88
    },
    {
        subject: 'chinese',
        score: 95
    },
    {
        subject: 'english',
        score: 80
    }
];

const dis = {
    math: 0.5,
    chinese: 0.3,
    english: 0.2
};

sum2 = result => result.reduce((prev, cur) => prev + cur.score * dis[cur.subject], -10);

console.log(sum2(result));

/*
一串字符串中每个字母出现的次数
 */

times = arr => arr.split('').reduce((res, cur) => {
    res[cur] ? res[cur]++ : res[cur] = 1;
    return res;
}, {});

console.log(times('abcdaabc'));

/*
操作数组
 */

t = [1, 2].reduce(function (res, cur) {
    res.push(cur + 1);
    return res;
}, []);

console.log(t);




