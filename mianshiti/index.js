const name = 'a';
const json = {
    name: 'b',
    jsonName: {
        name: 'c',
        getName: function () {
            this.name
        }

    }
};

console.log(json.jsonName.getName())

var arr = [1, 2, 3];
for (var i = 0, j;i<arr.length; j = arr[i++]) {
    console.log(j);
}

console.log('---------');
console.log(i);
console.log('---------');
console.log(j);
console.log('---------');

var a = 100;
(function(i){
    var a=i ;
    console.log(a);
})(a);


