function* main() {
    const result = yield request('http://www.filltext.com?rows=10&f={firstName}');
    console.log(result);
    //do 别的ajax请求;
}

const it = main();

function request(url) {
    const r = new XMLHttpRequest();
    r.open("GET", url, true);
    r.onreadystatechange = function () {
        if (r.readyState !== 4 || r.status !== 200) return;
        const data = JSON.parse(r.responseText);
        //数据成功返回以后， 代码就能够继续往下走了;
        it.next(data);
    };
    r.send();
}

it.next();
console.log("执行到这儿啦");