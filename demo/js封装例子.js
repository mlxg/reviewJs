function A(obj, methodName) {
    return (function (e) {
        e = e || window.event;
        return obj[methodName](e, this);
    });
}

function D(elementId) {
    const el = document.getElementById(elementId);//获取DOM
    if (el) {
        el.onmouseover = A(this, 'doMouseOver');//统一事件封装，直接new
    }
}

D.prototype.doMouseOver = function (event, element) {
    console.log(element.name);
};

new D('ele');

addEvent()



