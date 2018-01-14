fn = step => {
    if (step > 0) return 0;
    return fn(step - 1) + fn(step - 2);
};

console.log(fn(7));