
var kModel = require('../Models/Kitten');

var locomotive = require('locomotive')
  , Controller = locomotive.Controller
  ,security = require('../Authorization_Provider/action_authorize.js') ;

var ctrModel = require('../Role/methodRole.js');

var db= require('../../config/mongooseConnection');

var PagesController = new Controller();

PagesController.main = function() {
    if(this.request.isAuthenticated())
    {

    this.title = 'Locomotive'
    this.users= [{name: 'samet'},{name :'tam'}];
    console.log('this is after auth'+ this.req.isAuthenticated());
    this.user=this.req.user.username
       // console.log(this.req)

        function mm(ll)
        {
            ll.render();
        }

        mm(this);

    }
    else
    {
        this.redirect('login')
    }
}

PagesController.nopermission404 = function() {

    this.title = 'Authorization Error'
    this.message= 'You NOT AUTHORIZED for this action'
    this.render();

}

PagesController.kogrid = function() {

    this.title = 'Knockout Grid'
    this.message= 'Welcome to knockout grid page'
    this.render();

}

PagesController.test = function(){



//console.log(security.IsUserAuthorized('test',this.req.user))
//    console.log(this.request.isAuthenticated())
    //security.IsUserAuthorized('test',this.req.user)
    //console.log('This is before callback')
   // setTimeout(function(){
     //   console.log('this is after callback' + security.result);

//    },5000)

    //console.log(' This is before call')

    //console.log('This is the call respond: ' + auth.list)
    //console.log(' This is after call')

    //if(this.request.isAuthenticated()&&security.IsUserAuthorized('test',this.req.user))
   // {
//
       // console.log(auth.list(this.req,this.res));
//function callback(err,result){
      var xx = ctrModel.methodRole;
//    console.log('Print 1 ');
//    xx.findSimilarTypes(this.req,this.res,function (err, dogs) {
//        console.log('Resuls Dogs: '+ dogs); // woof
    //console.log(this.req.user)
        var gg=this;

    var ty=new xx();

    //console.log(ty.findSimilarTypes('samet'));

   // xx.findOne({methodName: 'test'},function (err,method)
    //{
     //   callback(method)

//    })

  //  var yy=new auth.vehicle();

    //yy.car();

    security.IsUserAuthorized('tesst',gg,gg.req.user,function(result){
    console.log(result);


    ty.getItAll('samet is here',function(method)
    {
//        security.IsUserAuthorized('test',this.req.user,function(name){
//            console.log(name);
//        })



        gg.user=gg.req.user.username;
        ty.findSimilarTypes('samet');
        console.log('User data is THISSSs ' + gg.req.user.username);
        //this.title=  method.methodName;
        gg.method = method;
        gg.render();

        });});



//      this.render();
   // });

    //console.log('this is after auth'+ req.isAuthenticated());
    // console.log(this.req)

//    this.render();

  //  }
//    else
//    {
//       this.invoke('PagesController','nopermission404')
//    }

   // auth.list(this.req,this.res,new callback)

}

PagesController.admin = function()
{

    var actionName = 'test';
    var action = this;



    var showPage= function(action,data)
    {


        action.title = 'Management';
        action.message = 'HEY! '+ action.req.user.username +' WELCOME TO THE MANAGEMENT PANEL';
        action.render('management');

    }


    if(this.request.isAuthenticated())
    {
        security.IsUserAuthorized(actionName,action,this.req.user,showPage);
    }
    else
    {
        this.redirect('login')
    }

}







module.exports = PagesController;
