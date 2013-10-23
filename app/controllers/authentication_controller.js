/**
 * Created by Samet Caglar on 10/15/13.
 */
var locomotive = require('locomotive')
    , Controller = locomotive.Controller
    , model = require('../Models/login')
    ,passport = require('passport')
var LoginController= new Controller();



LoginController.loginview = function()
{

    if(this.req.isAuthenticated()){
        console.log('Request is authenticated')
        this.redirect('main');

    }
    else
    {   this.title = 'Login';
        this.render('loginView',{layout: false});
    }

}


LoginController.login = function() {

            passport.authenticate('local', {
                    successRedirect: 'main',
                    failureRedirect: 'login'}
            )(this.__req, this.__res, this.__next);



}


LoginController.logout = function()
{
    //Any of these Could Be used to logut
    //this.req.logout();
    this.req.session.destroy();
    console.log('The Logout Succeeded');
    this.redirect(this.urlFor({action:'loginview'}));
}



module.exports = LoginController;
