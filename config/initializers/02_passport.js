/**
 * Created by Samet Caglar on 10/16/13.
 */
var passport = require('passport')
   ,LocalStrategy = require('passport-local').Strategy,
    model = require('../../app/Models/login');


passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    var attUser= new model.LoginModel();

    attUser.userById(id, function (err, user) {
        done(err, user);
    });

});


passport.use(new LocalStrategy(
    function(username, password, done) {
        // asynchronous verification, for effect...
        process.nextTick(function () {
        var attUser= new model.LoginModel();

              attUser.userByUserName(username, function(err, user) {
                if (err) {  return done(err); }
                if (!user) { return done(null, false, { message: 'Unknown user ' + username }); }
                if (user.password != password) {console.log(user.password); return done(null, false, { message: 'Invalid password' }); }
                return done(null, user);
            })

        })
        }));
