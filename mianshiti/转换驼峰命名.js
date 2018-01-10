toCamelCaseVar = (variable) => /* TODO */ {
    return variable.replace(/_+[a-zA-Z]/g, (m, i) => {
        if (i) return (m.match(/[a-zA-Z]/)[0].toUpperCase());
        return m;
    });
};

console.log(toCamelCaseVar('is_goos'));