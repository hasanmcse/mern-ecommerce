// const  ProductDetailsModel = require('../Models/ProductDetailsModel');

// //create 
// exports.createProductDetails = async(req,res) => {
//     let reqBody= req.body;
//     try{
//         let result = await ProductDetailsModel.create(reqBody);
//         res.status(200).json({status:"success", data:result})
//     }
//     catch(e){
//         res.status(200).json({status:"fail",data:e})
//     }
// }