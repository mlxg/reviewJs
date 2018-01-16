// // react 拦截器
//
// http 是用 axios 做的请求，用户每次登录之后后台都会返回一个token和uid给前端。
// token和uid都存放在localStoragel里面，在axios里面设置的每次请求都会把token和uid给后台去验证。
// 在axios响应拦截器中判断服务端返回的状态码，确定用户登录是否超时；如果超时就给出提示，跳至登录页。

// axios 请求拦截器
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    const uid = localStorage.getItem('uid');
    if (config.method === 'post') {
        let data = qs.parse(config.data);

        config.data = qs.stringify({
            ...data,
            token: token,
            uid: uid
        });
    } else if (config.method === 'get') {
        config.params = {
            ...config.params,
            token: token,
            uid: uid
        };
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

// axios 响应拦截器

let preTime;
axios.interceptors.response.use(function (res) {
    let status = res.data.status;
    if (status === 9999) {
        preTime = +new Date();
        let nowTime = +new Date();
        localStorage.removeItem('token');
        localStorage.removeItem('uid');
        store.dispatch(push('/login'));
        if (nowTime - preTime > 600000) {
            preTime = nowTime;
            message.error('登录超时，请重新登录');
        }
    }
    return res;
});