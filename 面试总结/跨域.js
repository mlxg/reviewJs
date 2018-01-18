/*
jsonp
document.domain+iframe
window.name+iframe
html5_postMessage
 */

//document.domain+iframe

const iframe0 = document.getElementById('iframe');
iframe0.onload = function () {
    iframe.contentDocument.getElementsByTagName('body')[0].innerText = 'Text Changed!';
    iframe.contentWindow.iframeFunc();
};
iframe0.src = 'iframe.html';

//iframe.html
function iframeFunc() {
    console.log('Calling function successfully!');
}

//window.name+iframe
const iframe = document.getElementById('iframe');
iframe.onload = function () {
    iframe.onload = function () {
        console.log(iframe.contentWindow.name);
    };
    iframe.src = 'about:blank';
};

//jsonp
const jsonp = document.createElement('script');
jsonp.src = 'http://e.163.com/jnewsWeather.json?callback=getWeather&cityId=101010100';
document.body.insertBefore(jsonp, document.body.lastChild);

//html5_postMessage
const _iframe = document.getElementById('iframe');
let res = '';
_iframe.addEventListener('message', (e) => {
    res = e.data;
    e.source.postMessage('done', '');
});
