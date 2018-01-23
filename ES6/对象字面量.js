//通过对象字面量创建对象
const human = {
    breathe() {
        console.log('breathing...');
    }
};
const worker = {
    __proto__: human, //设置此对象的原型为human,相当于继承human
    company: 'freelancer',
    work() {
        console.log(`working in ${this.company}`);
    }
};
human.breathe();//输出 ‘breathing...’
//调用继承来的breathe方法
worker.work();//输出 ‘breathing...’