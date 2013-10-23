/**
 * Created by Samet Caglar on 10/21/13.
 */
var locomotive = require('locomotive')
    , Controller = locomotive.Controller
    , model = require('../Models/login')
    ,passport = require('passport')
    ,models = require('../Models/user')
    ,procurement = require('../Models/procurement');

var user = new models.userModel();

var procurementObj = new procurement.procurementModel();

var adminController = new Controller();

adminController.userPage = function()
{
    var action = this;
    user.getAll(
    function(users)
    {
        action.title = 'User Management'
        action.users = users;
        action.render('user');

    });


}

adminController.procurementsPage = function()
{

    var action = this;

    procurementObj.getAll(function(procurements){

        action.user = action.req.user.username
        action.procs = procurements;
        action.test = 'PROCUREMENT PANEL';
        action.title = 'Procurements';
        action.render('procurements');
    });


}



adminController.procurementsSave = function()
{

    var action = this;

    var newProcurement = new procurement.procurementModel();

    newProcurement.Status =  this.req.param('Status');
    newProcurement.StartUnits =  this.req.param('StartUnits');
    newProcurement.DemandDays =  this.req.param('DemandDays');
    newProcurement.PlanName =  this.req.param('PlanName');
    newProcurement.PlanDefinition =  this.req.param('PlanDefinition');
    newProcurement.EndWeek =  this.req.param('EndWeek');
    newProcurement.EndFiscalMonth =  this.req.param('EndFiscalMonth');
    newProcurement.EndFiscalQuarter =  this.req.param('EndFiscalQuarter');
    newProcurement.SKU =  this.req.param('SKU');
    newProcurement.Class =  this.req.param('Class');
    newProcurement.GenderCat =  this.req.param('GenderCat');
    newProcurement.ItemCategory =  this.req.param('ItemCategory');
    newProcurement.Style =  this.req.param('Style');
    newProcurement.Color =  this.req.param('Color');
    newProcurement.Location =  this.req.param('Location');
    newProcurement.LocGroup =  this.req.param('LocGroup');
    newProcurement.SubGroup =  this.req.param('SubGroup');
    newProcurement.Organization =  this.req.param('Organization');
    newProcurement.StartAmount =  this.req.param('StartAmount');

    newProcurement.saveProc(newProcurement,action);






}
module.exports = adminController;
