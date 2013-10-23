/**
 * Created by Samet Caglar on 10/15/13.
 */
//Mongoose Conections




var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    // yay!
    console.log(' Mongoose is connected to the Db !')
});


exports.mongoose= mongoose;