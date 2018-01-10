function a() {
    var ul = document.getElementById('ul');
    ul.onclick = function () {
        e = window.event ? window.event : e;
        var who = e.target ? e.target : e.srcElement;
        alert(who.innerHTML)
    }
}