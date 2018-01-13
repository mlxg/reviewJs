const x = 1;

function a() {
    console.log(x);
}

const o = {};
o.x = 0;
o.m = a;
o.m.apply();//变成全局变量


