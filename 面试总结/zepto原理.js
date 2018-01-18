/*
事件绑定核心就是on和off，用过trigger用来触发，类观察者模式


    递归序列，处理event为键值对的情况
    简写方式，如果只是简单的事件和回调的话（$("#btn").on("click",function(){})）,one参数不参与简写形式，有单独的one方法。
    循环zepto对象，初始化生成$this对象，对selector进行了事件代理delegetor和事件注册add

autoRemove,如果one为true，也就是只想使用一次，那么使用remove，并通过apply，给callback设立event对象；
 */