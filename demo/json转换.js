function init() {
    const book = {
        til: '1',
        name: '2',
        age: '33'
    };

    const b = JSON.stringify(book);

    const c = JSON.parse(b);
    console.log(b);
    console.log(c);
}

init();