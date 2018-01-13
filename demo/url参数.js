const url = 'a?a=1&b=2';

c = (url) => {
    const arr = url.split('?')[1].split('&');

    const res = {};
    for (let i = 0; i < arr.length; i++) {
        const d = arr[i].split('=');
        res[d[0]] = d[1];
    }+
    console.log(res);
};

c(url);
