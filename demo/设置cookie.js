function setCookie(key, value, t) {
    var oDate = new Date()
    oDate.setDate(oDate.getDate() + t)
    document.cookie = key + '=' + encodeURI(value) + ';expries=' + oDate.toUTCString()
}