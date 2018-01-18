/***
 * 事件委托和事件绑定兼容方案
 * @param element
 * @param type
 * @param callback
 */
const addEvent = function (element, type, callback) {
    if (element.addEventListener) {
        element.addEventListener(type, callback, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + type, callback);
    }
};

addEvent(parent, 'click', function (e) {
    e = e || window.event;
    const target = e.target || e.srcElement;
    if (target.nodeName === 'LI') {
        console.log(target);
    }
});