
const mongoose =require('mongoose');

const SalesSchema=mongoose.Schema({
        product:{type:String,required:true},
        quantity:{type:String,required:true},
        price:{type:String,required:true},
       
    },
    {timestamps:true,versionKey:false}
)

const SalesModel=mongoose.model('sales',ProductSchema);
module.exports=SalesModel;
