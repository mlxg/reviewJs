let arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(function () {
        console.log(i);
    });
}
arr[1]();  // 5
arr[2]();  // 5
arr[3]();  // 5
arr[4]();  // 5