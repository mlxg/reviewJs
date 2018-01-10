var url1 = 'http://www.baidu.com/index.jsp?key=0&name=2&age=9';

function parseQueryString(url) {
    var str = url.split('?')[1];
    var item = str.split('&');
    var result = {};
    var arr = '';
    for (var i = 0; i < item.length; i++) {
        arr = item[i].split('=');
        result[arr[0]] = arr[1];
    }
    return result;
}

parseQueryString(url1);

setTimeout(function () {//返回上一页
    document.referrer ? window.location.href = url1 : window.go.history.go(-1);
}, 3000);
