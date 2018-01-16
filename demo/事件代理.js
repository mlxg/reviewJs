// jQuery的delegate的方法需要三个参数，一个选择器，一个事件名称，和事件处理函数
$("#link-list").delegate("a", "click", function(){
    // "$(this)" is the node that was clicked
    console.log("you clicked a link!",$(this));
});

// 利用浏览器冒泡机制为DOM元素添加事件代理

var delegate = function (client, clientMethod) {
    return function () {
        return clientMethod.apply(client, arguments);
    };
};
var ClassA = function () {
    var _color = 'red';
    return {
        getColor: function () {
            console.log('Color: ' + _color);
        },
        setColor: function (color) {
            _color = color;
        }
    };
};

var a = new ClassA();
a.getColor();
a.setColor('green');
a.getColor();
console.log('执行代理！');
var d = delegate(a, a.setColor);
d('blue');//d代理a的方法
console.log('执行完毕！');
a.getColor();