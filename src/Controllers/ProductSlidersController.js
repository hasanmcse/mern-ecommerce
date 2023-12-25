// const  ProductSlidersModel = require('../Models/ProductSliderModel');

// //create 
// exports.createProductSliders = async(req,res) => {
//     let reqBody= req.body;
//     try{
//         let result = await ProductSlidersModel.create(reqBody);
//         res.status(200).json({status:"success", data:result})
//     }
//     catch(e){
//         res.status(200).json({status:"fail",data:e})
//     }
// }