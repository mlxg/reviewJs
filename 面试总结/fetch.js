/*
fetch将不同性质的接口分散在不同对象上面,设计更合理
返回的是promise对象,避免嵌套回调函数
 */

fetch(url).then(function (res) {
    return res.json()
}).then(function (data) {
    return data
})

fetch('/users.json', {
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    headers: new Headers({
        'Content-Type': 'text/plain'
    })

}).then(function() { /* handle response */ });
