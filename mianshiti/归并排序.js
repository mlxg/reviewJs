const move = (arr, i, j) => {
    arr.splice(i, j - i + 1, ...[arr[j], ...arr.slice(i, j)]);
    console.log(i, j - i + 1, ...[arr[j], ...arr.slice(i, j)]);
};
const merge = arr => {
    let j = arr.length / 2 | 0;//i=0;j=3
    for (let i = 0; i < arr.length; i++) {
        if (j <= i) return;
        if (arr[i] > arr[j]) move(arr, i, j++);
    }
};

merge([10, 21, 32, 11, 16, 40]);