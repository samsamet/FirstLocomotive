/**
 * Created by Samet Caglar on 10/15/13.
 */
var db= require('../../config/mongooseConnection');


var loginSchema = db.mongoose.Schema({
    id: Number,
    username: String,
    password: String,
    roles:[{
        id: Number,
        roleName: String
    }],
    createDate: Date,
    updateDate: Date
});


//METHODS FOR THE MODEL
//
//loginSchema.methods.login = function () {
//    var user = this.userName
//
//    console.log('The user '+ user + ' is Logged In!');
//}
//
//loginSchema.methods.logout = function () {
//    var user = this.userName
//
//    console.log('The user '+ user + ' is Logged Out!');
//}

loginSchema.methods.saveuser = function () {
    var user = this;
  user.save(function (err, fluffy) {
        if (err) // TODO handle the error
            console.log('The SAVE TO MONGO FAILED')
        else
            console.log('The SAVE TO MONGO  SUCCEEDED')
    });
    console.log('The user '+ user + ' is Logged Out!');
}

loginSchema.methods.userById = function (id,fn) {
    var user = new Login();
    Login.find({ id: id },function(err,user){

        if(user.length==0)
        {

            console.log('The User is not Found In The System');
            return fn(null,null)
        }
        else
        {
            console.log('The User is  FFFFound In The System');
            return fn(null,user[0])
        }


    })
}




loginSchema.methods.userByUserName = function (username,fn) {
    var user = new Login();

    Login.find({ username: username },function(err,user){
       if(user.length==0)
       {

        console.log('The User is not Found In The System');
           return fn(null,null)
       }
        else
       {console.log('The User is  FFFFound In The System');

           console.log(user);
           return fn(null,user[0])
       }


    });

}




var Login = db.mongoose.model('Login', loginSchema )
exports.LoginModel= Login;