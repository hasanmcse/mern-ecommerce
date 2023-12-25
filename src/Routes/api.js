const express = require('express');

const ProductController = require("../Controllers/ProductController")
const UserController = require('../Controllers/UserController')
const AuthVerification = require('../Middleware/AuthVerification')

const router = express.Router();




// Product related routing api

router.get('/ProductBrandList', ProductController.ProductBrandList)
router.get('/ProductCategoryList', ProductController.ProductCategoryList)
router.get('/ProductSliderList', ProductController.ProductSliderList)
router.get('/ProductListByBrand/:BrandID', ProductController.ProductListByBrand)
router.get('/ProductListByCategory/:CategoryID', ProductController.ProductListByCategory)
router.get('/ProductListBySimiller/:CategoryID', ProductController.ProductCategoryList)
router.get('/ProductListByKeyword/:Keyword', ProductController.ProductListByKeyword)
router.get('/ProductListByRemark/:Remark', ProductController.ProductListByRemark)
router.get('/ProductDetails/:ProductID', ProductController.ProductDetails)
router.get('/ProductReviewList/:ProductID', ProductController.ProductReviewList)



// user api
router.get('/UserOTP/:email', UserController.UserOTP)
router.get('/VerifyLogin/:email/:otp', UserController.VerifyLogin)
router.get('/UserLogout', AuthVerification, UserController.UserLogout)
router.post('/CreateProfile', AuthVerification, UserController.CreateProfile)
router.post('/UpdateProfile', AuthVerification, UserController.UpdateProfile)
router.get('/ReadProfile', AuthVerification, UserController.ReadProfile)

router.get('/WishList',AuthVerification,ProductController.WishList)
router.post('/CreateWishList',AuthVerification,ProductController.CreateWishList)
router.post('/RemoveWishList',AuthVerification,ProductController.RemoveWishList)

router.get('/CartList',AuthVerification,ProductController.CartList)
router.post('/CreateCartList',AuthVerification,ProductController.CreateCartList)
router.post('/RemoveCartList',AuthVerification,ProductController.RemoveCartList)











//For data create or insert with database

// const Brand = require('../Controllers/BrandController');
// const Category = require('../Controllers/CategoryController')
// const Features = require('../Controllers/FeaturesController')
// const Product = require('../Controllers/ProductController')
// const ProductDetails = require('../Controllers/ProductDetailsController')
// const ProductSliders = require('../Controllers/ProductSlidersController')
// const  User = require('../Controllers/UserController')
// const  Profile = require('../Controllers/ProfileController')
// const  Review = require('../Controllers/ReviewController')





//route api

// router.post('/create-brands', Brand.createBrand);
// router.post('/create-categories', Category.createCategory)
// router.post('/create-features', Features.createFeatures)
// router.post('/create-products', Product.createProducts)
// router.post('/create-product-details', ProductDetails.createProductDetails)
// router.post('/create-product-sliders', ProductSliders.createProductSliders)
// router.post('/create-user', User.createUser)
// router.post('/create-profile', Profile.createProfile)
// router.post('/create-review', Review.createReview)






module.exports = router;
