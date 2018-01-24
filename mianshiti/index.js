$.fn.extend({
    alertWhileClick:function() {
        $(this).click(function(){
            alert($(this).val());
        });
    }
});
$("#input1").alertWhileClick();

// 页面上为$("#input1")为一个jQuery实例，当它调用成员方法 alertWhileClick后，便实现了扩展，每次被点击时它会先弹出目前编辑里的内容。

jQuery.extend(object);　//为jQuery类添加类方法，可以理解为添加静态方法
jQuery.extend({
    min: function(a, b) { return a < b ? a : b; },
    max: function(a, b) { return a > b ? a : b; }
});
jQuery.min(2,3); //  2