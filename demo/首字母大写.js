function C(str) {
    var word = str.toLowerCase().split(" ")
    for (var i = 0; i < word.length; i++) {
        word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1)
    }

    str = word.join(" ")
    return str

}

var str1 = "a wWw wdwd"

C(str1)