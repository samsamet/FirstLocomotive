

var db= require('../../config/mongooseConnection');


var procurementSchema = db.mongoose.Schema({
    Status:String,
    StartUnits:Number,
    DemandDays:Number,
    PlanName:String,
    PlanDefinition:String,
    EndWeek:String,
    EndFiscalMonth:String,
    EndFiscalQuarter:String,
    SKU:String,
    Class:String,
    GenderCat:String,
    ItemCategory:String,
    ItemSubCategory:String,
    Style:String,
    Color:String,
    Location:String,
    LocGroup:String,
    SubGroup:String,
    Organization:String,
    StartAmount:Number
});


procurementSchema.methods.getAll = function (callback) {

    Procurement.find(function(err,procurements){
        callback(procurements);    })
}

procurementSchema.methods.saveProc = function (newProcurement,self) {
    var proc = new Procurement(newProcurement);
    proc.save(function(err,result)
    {
        if(!err)
        {
            console.log('The Record is Saved');
            self.redirect('procs')
        }
        else
        {
            console.log('The record Save is failed')
            self.redirect('procs')
            //Add Some Erro Redirect or Operations
        }
    });

}


var Procurement = db.mongoose.model('procurement', procurementSchema)



exports.procurementModel = Procurement;