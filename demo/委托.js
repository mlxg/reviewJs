function a() {
    var ul = document.getElementById('ul');
    ul.onclick = function () {
        e = window.event ? window.event : e;
        var who = e.target ? e.target : e.srcElement;
        alert(who.innerHTML)
    }
}

// method1
for (var i = 0; i < a.length; i++) {
    a[i].index = i;
    a[i].onclick = function () {
        console.log(this.index);
    };
}

// method2
for (var i = 0; i < a.length; i++) {
    a[i].onclick = function (n) {
        return function () {
            console.log(n + a[n].innerHTML);
        };
    }(i);
}