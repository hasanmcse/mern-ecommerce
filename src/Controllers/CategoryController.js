// const  CategoryModel = require('../Models/CategoryModel');

// //create 
// exports.createCategory = async(req,res) => {
//     let reqBody= req.body;
//     try{
//         let result = await CategoryModel.create(reqBody);
//         res.status(200).json({status:"success", data:result})
//     }
//     catch(e){
//         res.status(200).json({status:"fail",data:e})
//     }
// }