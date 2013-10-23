/**
 * Created by Samet Caglar on 10/21/13.
 */

var db= require('../../config/mongooseConnection');


var UserSchema = db.mongoose.Schema({
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



UserSchema.methods.getAll = function (callback) {
   User.find(function(err,results){
       console.log(results)
       callback(results)
   });

}

var User = db.mongoose.model('users', UserSchema)



exports.userModel= User;