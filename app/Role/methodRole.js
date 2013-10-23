/**
 * Created by Samet Caglar on 10/16/13.
 */
var db= require('../../config/mongooseConnection');


var methodRoleSchema = db.mongoose.Schema({
    id: Number,
    methodName: String,
    roles: [{id:Number, roleName: String}],
    createDate: Date,
    updateDate: Date
});


// assign a function to the "methods" object of our animalSchema
methodRoleSchema.methods.findSimilarTypes = function (name) {
    console.log('Find Similar PAges '+name);

    return 'hotmail';

}


// assign a function to the "methods" object of our animalSchema
methodRoleSchema.methods.getItAll = function (name,callback) {


    methodRole.findOne({methodName: 'test'},function back(err,method)
    {
        console.log(name);
        return callback(method);
    })

}


var methodRole = db.mongoose.model('methodRole', methodRoleSchema )
exports.methodRole= methodRole;