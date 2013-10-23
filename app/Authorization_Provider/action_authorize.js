/**
 * Created by Samet Caglar on 10/17/13.
 */
var methodRole= require('../Role/methodRole');
var methodModel= methodRole.methodRole;



exports.IsUserAuthorized = function (actionName,self,userData,showPage){

    methodModel.findOne({methodName: actionName},function back(err,result)
    {

        var isAuthorized = false;
        if(result&&userData)
        {
            for(var b=0; b<result.roles.length;b++)
            {

                for(var a=0; a< userData.roles.length;a++)
                {

                    if(userData.roles[a].roleName==result.roles[b].roleName)
                    {
                        showPage(self,true);
                    }

                }
            }
        }
        self.invoke('PagesController','nopermission404')

    })
}







///var methodAuth = function (req,res){
//
//
//
//this.IsUserAuthorized = function(methodName,userData) {
//    //this.result = false;
//
//
//    var query =methodModel.findOne({methodName: methodName},function back(err,method)
//    {
//        for(var b=0; b<method.roles.length;b++)
//        {
//
//            for(var a=0; a< userData.roles.length;a++)
//            {
//
//                if(userData.roles[a].roleName==method.roles[b].roleName)
//                {
//                    //console.log('User Is Authorized')
//                   // console.log(req)
//                   // res.send(true)
//                }
//
//            }
//        }
//    })
//
//
//}
//
//};


exports.vehicle = function()
{
    this.car = function ()
    {
        console.log('Car is Called');
    }

}



exports.list = function(req,res) {

   // console.log(req);
    //console.log(res);
    return 'In the List';


}


