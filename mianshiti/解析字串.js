const extractStr = (str) => /* TODO */ {
    const strArr = str.split('.');

    const temp = [];
    if (strArr.length > 1) {
        strArr[strArr.length - 1] = '';
        for (const key in strArr) {
            const num = strArr[key].lastIndexOf(':');
            if (num >= 0) {
                temp.push(strArr[key].substring(num + 1));
            }
        }
    }
    return temp;
};


console.log(extractStr('My name is:Jerry. My age is:12.'));