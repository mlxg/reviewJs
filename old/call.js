/**
 * Created by Rhee on 2017/5/26.
 */
const user = {
    name: 'Rahul Mhatre',
    whatIsYourName: function () {
        console.log(this.name);
    }
};
user.whatIsYourName();
const call = {
    name: 'Neha Sampat'
};
user.whatIsYourName.call(call);




