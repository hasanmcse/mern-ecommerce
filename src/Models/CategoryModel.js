const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema({
    categoryName:{type:String, unique:true,required:true},
    categoryImg:{type:String, unique:true}
},
{timestamps:true, versionKey:false}
)

const CategorydModel = mongoose.model('categories', CategorySchema);

module.exports=CategorydModel;