/**
 * Created by Samet Caglar on 10/15/13.
 */
var db= require('../../config/mongooseConnection');


var kittySchema = db.mongoose.Schema({
    name: String
});


kittySchema.methods.speak = function () {
    var greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name"
    console.log(greeting);
}

var Kitten = db.mongoose.model('Kitten', kittySchema)



exports.KittenModel= Kitten;