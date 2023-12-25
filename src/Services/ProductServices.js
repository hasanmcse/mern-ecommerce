const BrandModel = require('../Models/BrandModel')
const CategoryModel=require('../Models/CategoryModel')
const ProductModel=require('../Models/ProductModel')
const ProductDetailsModel=require('../Models/ProductDetailsModel')
const ProductSliderModel=require('../Models/ProductSliderModel')
const ProductReviewModel=require('../Models/ReviewModel')

const mongoose = require("mongoose");
const ReviewModel = require('../Models/ReviewModel')

const ObjectID = mongoose.Types.ObjectId;




const BrandListService = async( )=>{
    try{
        const data =await BrandModel.find()
        return {status:"success", data:data}
    }catch(e){
        return {status:"fail", data:e}.toString();
    }
}


const CategoryListService= async( )=>{
    try{
        const data =await CategoryModel.find()
        return {status:"success", data:data}
    }catch(e){
        return {status:"fail", data:e}.toString();
    }
}


const SliderListService= async()=>{
    try{
        const data =await ProductSliderModel.find()
        return {status:"success", data:data}
    }catch(e){
        return {status:"fail", data:e}.toString();
    }
}



const ListByBrandService= async(req)=>{

    try{
        let BrandID = new ObjectID (req.params.BrandID);
        let MatchStage={$match:{brandID:BrandID}}
        let JoinWithBrandStage={$lookup:{from:'brands',localField:"brandID",foreignField:"_id", as:"brand"}}
        let JoinWithCategoryStage={$lookup:{from:"categories", localField:"categoryID", foreignField:"_id", as:"category"}}
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage = {$unwind:"$category"}
        let ProjectionStage = {$project:{'brand._id':0, 'category._id':0, 'categoryID':0, 'brandID':0, 'createdAt':0, 'updatedAt':0}}



        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])
            return {status:"success", data:data}
    }
    catch(e){
        return {status:"fail", data:e}.toString();
    }

}

const ListByCategoryService= async(req)=>{

    try{
        let CategoryID = new ObjectID (req.params.CategoryID);
        let MatchStage={$match:{categoryID:CategoryID}}
        let JoinWithBrandStage={$lookup:{from:'brands',localField:"brandID",foreignField:"_id", as:"brand"}}
        let JoinWithCategoryStage={$lookup:{from:"categories", localField:"categoryID", foreignField:"_id", as:"category"}}
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage = {$unwind:"$category"}
        let ProjectionStage = {$project:{'brand._id':0, 'category._id':0, 'categoryID':0, 'brandID':0, 'createdAt':0, 'updatedAt':0}}



        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])
            return {status:"success", data:data}
    }
    catch(e){
        return {status:"fail", data:e}.toString();
    }
}

const ListByRemarksService= async(req)=>{
    try{
        let Remark = req.params.Remark;
        let MatchStage={$match:{remark:Remark}}
        let JoinWithBrandStage={$lookup:{from:'brands',localField:"brandID",foreignField:"_id", as:"brand"}}
        let JoinWithCategoryStage={$lookup:{from:"categories", localField:"categoryID", foreignField:"_id", as:"category"}}
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage = {$unwind:"$category"}
        let ProjectionStage = {$project:{'brand._id':0, 'category._id':0, 'categoryID':0, 'brandID':0, 'createdAt':0, 'updatedAt':0}}



        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])
            return {status:"success", data:data}
    }
    catch(e){
        return {status:"fail", data:e}.toString();
    }
}



const ListBySimillerService= async(req)=>{

    try{
        let CategoryID = new ObjectID (req.params.CategoryID);
        let MatchStage={$match:{categoryID:CategoryID}}
        let LimitStage={$limit:5}
        let JoinWithBrandStage={$lookup:{from:'brands',localField:"brandID",foreignField:"_id", as:"brand"}}
        let JoinWithCategoryStage={$lookup:{from:"categories", localField:"categoryID", foreignField:"_id", as:"category"}}
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage = {$unwind:"$category"}
        let ProjectionStage = {$project:{'brand._id':0, 'category._id':0, 'categoryID':0, 'brandID':0, 'createdAt':0, 'updatedAt':0}}



        let data = await ProductModel.aggregate([
            MatchStage,
            LimitStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])
            return {status:"success", data:data}
    }
    catch(e){
        return {status:"fail", data:e}.toString();
    }
}



const ProductDetailsService= async(req)=>{
    try{
        let ProductID = new ObjectID (req.params.ProductID);
        let MatchStage={$match:{_id:ProductID}}
       
        let JoinWithBrandStage={$lookup:{from:'brands',localField:"brandID",foreignField:"_id", as:"brand"}}
        let JoinWithCategoryStage={$lookup:{from:"categories", localField:"categoryID", foreignField:"_id", as:"category"}}
        let JoinWithProductDetails={$lookup:{from:'productdetails',localField:"_id",foreignField:"productID", as:"details"}}

        let UnwindBrandStage = {$unwind:"$brand"}
        let UnwindCategoryStage = {$unwind:"$category"}
        let UnwindDetailsStage = {$unwind:"$details"}

        let ProjectionStage = {$project:{'brand._id':0, 'category._id':0, 'categoryID':0, 'brandID':0, 'createdAt':0, 'updatedAt':0}}


        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            JoinWithProductDetails,
            UnwindBrandStage,
            UnwindCategoryStage,
            UnwindDetailsStage,
            ProjectionStage
        ])
            return {status:"success", data:data}
    }
    catch(e){
        return {status:"fail", data:e}.toString();
    }
}


const ListByKeywordService= async(req)=>{
 
    try{
        let SearchRegex = {"$regex":req.params.Keyword, "$options":"i"}
        let SearchParams = [{title:SearchRegex}, {shortDes:SearchRegex}]
        let SearchQuery = {$or:SearchParams}
    
        let MatchStage = {$match:SearchQuery}

        let JoinWithBrandStage={$lookup:{from:'brands',localField:"brandID",foreignField:"_id", as:"brand"}}
        let JoinWithCategoryStage={$lookup:{from:"categories", localField:"categoryID", foreignField:"_id", as:"category"}}
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage = {$unwind:"$category"}
        let ProjectionStage = {$project:{'brand._id':0, 'category._id':0, 'categoryID':0, 'brandID':0, 'createdAt':0, 'updatedAt':0}}



        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])
            return {status:"success", data:data}
    }
    catch(e){
        return {status:"fail", data:e}.toString();
    }

}


const ReviewListService= async(req)=>{
    try{
        let ProductID = new ObjectID (req.params.ProductID);
        let MatchStage={$match:{productID:ProductID}}
        let JoinWithProfileStage={$lookup:{from:'profiles',localField:"userID",foreignField:"userID", as:"profile"}}
        let ProjectionStage = {$project:{'desc':1, 'rating':1, 'profile.cus_name':1}}
        
        
        let data = await ReviewModel.aggregate([
            MatchStage,
            JoinWithProfileStage,
            ProjectionStage
    ])
    return {status:"success", data:data}
    }
    catch(e){
        return {status:"fail", data:e}.toString();
    }


}




module.exports={
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByBrandService,
    ListByCategoryService,
    ListBySimillerService,
    ListByKeywordService,
    ListByRemarksService,
    ProductDetailsService,
    ReviewListService
};