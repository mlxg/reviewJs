function init() {
    var book = {
        til: '1',
        name: '2',
        age: '33'
    }

    var b=JSON.stringify(book)

    var c=JSON.parse(b)
    console.log(b)
}
init()