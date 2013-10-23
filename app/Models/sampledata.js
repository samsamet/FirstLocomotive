/**
 * Created by Samet Caglar on 10/17/13.
 */
var db= require('../../config/mongooseConnection');


var sampleSchema = db.mongoose.Schema({
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



var Sapmle = db.mongoose.model('Sample', sampleSchema)



exports.SampleMode= Sapmle;