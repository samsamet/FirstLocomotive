/**
 * Created by Samet Caglar on 10/15/13.
 */
var db= require('../../config/mongooseConnection');


var userRoleSchema = db.mongoose.Schema({
    id: Number,
    roleName: String,
    createDate: Date,
    updateDate: Date
});


userRoleSchema.methods.getRoles = function (id) {

}

var userRole = db.mongoose.model('userRole', userRoleSchema )

exports.userRoleModel= userRole;