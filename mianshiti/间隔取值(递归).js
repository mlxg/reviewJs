/**
 * 专业盗贼，间隔取值
 * @param numbs
 * @returns {number}
 */

const rob = (numbs) => /* TODO */ {
    let prevMax = 0;
    let curMax = 0;
    numbs.map((n) => {
        const temp = curMax;
        curMax = Math.max(prevMax + n, curMax);
        prevMax = temp;
    });
    return curMax
};

rob([1, 2, 4, 8]);