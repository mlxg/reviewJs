/**
 * Created by Rhee on 2017/5/26.
 */

var user = {
    name: "Rahul Mhatre",
    whatIsYourName: function () {
        return this.name
    }
};
user.whatIsYourName();
var user2 = {
    name: "Neha Sampat"
};
user.whatIsYourName.call(user2);



