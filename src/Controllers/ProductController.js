// const  ProductModel = require('../Models/ProductModel');

// //create 
// exports.createProducts = async(req,res) => {
//     let reqBody= req.body;
//     try{
//         let result = await ProductModel.create(reqBody);
//         res.status(200).json({status:"success", data:result})
//     }
//     catch(e){
//         res.status(200).json({status:"fail",data:e})
//     }
// }


const {BrandListService,
    CategoryListService,
    SliderListService,
    ListByBrandService,
    ListByCategoryService,
    ListBySimillerService,
    ListByKeywordService,
    ListByRemarksService,
    ProductDetailsService,
    ReviewListService
} = require('../Services/ProductServices');





exports.ProductBrandList = async (req, res) => {
    let resutl = await BrandListService()
    return res.status(200).json(resutl)
}

exports.ProductCategoryList = async (req, res) => {
    let resutl = await CategoryListService()
    return res.status(200).json(resutl)
}

exports.ProductSliderList = async (req, res) => {
    let resutl = await SliderListService()
    return res.status(200).json(resutl)
}




exports.ProductListByBrand = async (req, res) => {
    let resutl = await ListByBrandService(req)
    return res.status(200).json(resutl)
}

exports.ProductListByCategory = async (req, res) => {
    let resutl = await ListByCategoryService(req)
    return res.status(200).json(resutl)
}

exports.ProductListByRemark = async (req, res) => {
    let resutl = await ListByRemarksService(req)
    return res.status(200).json(resutl)
}



exports.ProductListBySimiller = async (req, res) => {
    let resutl = await ListBySimillerService(req)
    return res.status(200).json(resutl)
}


exports.ProductDetails = async (req, res) => {
    let resutl = await ProductDetailsService(req)
    return res.status(200).json(resutl)
}



exports.ProductListByKeyword = async (req, res) => {
    let resutl = await ListByKeywordService(req)
    return res.status(200).json(resutl)
}



exports.ProductReviewList = async (req, res) => {
    let resutl = await ReviewListService(req)
    return res.status(200).json(resutl)
}




