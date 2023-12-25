// const  ReviewModel = require('../Models/ReviewModel');

// //create 
// exports.createReview = async(req,res) => {
//     let reqBody= req.body;
//     try{
//         let result = await ReviewModel.create(reqBody);
//         res.status(200).json({status:"success", data:result})
//     }
//     catch(e){
//         res.status(200).json({status:"fail",data:e})
//     }
// }