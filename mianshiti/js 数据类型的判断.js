/**
 * Javascript 标准规定了六种基本数据类型(number, null, undefined, string, boolean, symbol)
 * @param obj
 * @returns {string}
 */

const type = obj => {
    const pass1 = typeof obj;
    if (pass1 !== 'object') return pass1;
    return obj == null ? 'null' : Object.getPrototypeOf(obj).constructor.name.toLowerCase();

};

console.log(type(null));
