// 假设 $ 已经定义为 'ScriptOJ'

// 加载 jQuery，$ 变量被覆盖，变成了 jQuery。
// ...
$('body').html('ScriptOJ');

// noConflict 恢复原来的 $ 变量
const j = $.noConflict();
$ === 'ScriptOJ'; // => true

// 现在 jQuery 变成了 j
j('body').html('Hello')

(() => {
    /* TODO */
    const j = window.$;
    window.$ = {
        noConflict() {
            /* TODO */
            window.$ = j;
            return this;
        }
    };
})();