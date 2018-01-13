function Student() {

}

class PrimaryStudent extends Student {
    constructor(grade) {
        super(); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        return 'I am at grade ' + this.grade;
    }
}

const a = new PrimaryStudent('63');
console.log(a.myGrade());