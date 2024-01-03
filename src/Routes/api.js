const express = require('express');

const ProductController = require("../Controllers/ProductController")
const UserController = require('../Controllers/UserController')
const WishListController = require('../Controllers/WishListController')
const CartListController=require('../Controllers/CartListController')
//const InvoiceController = require("../Controllers/InvoiceController")


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


// Wish api
 router.get('/WishList',AuthVerification,WishListController.WishList)
 router.post('/SaveWishList',AuthVerification,WishListController.SaveWishList)
 router.post('/RemoveWishList',AuthVerification,WishListController.RemoveWishList)

// cart api
router.post('/SaveCartList',AuthVerification,CartListController.SaveCartList)
router.post('/UpdateCartList/:cartID',AuthVerification,CartListController.UpdateCartList)
router.post('/RemoveCartList',AuthVerification,CartListController.RemoveCartList)
router.get('/CartList',AuthVerification,CartListController.CartList)





// Invoice & Payment
// router.get('/CreateInvoice',AuthVerification,InvoiceController.CreateInvoice)
// router.get('/InvoiceList',AuthVerification,InvoiceController.InvoiceList)
// router.get('/InvoiceProductList/:invoice_id',AuthVerification,InvoiceController.InvoiceProductList)
// router.post('/PaymentSuccess/:trxID',InvoiceController.PaymentSuccess)
// router.post('/PaymentCancel/:trxID',InvoiceController.PaymentCancel)
// router.post('/PaymentFail/:trxID',InvoiceController.PaymentFail)
// router.post('/PaymentIPN/:trxID',InvoiceController.PaymentIPN)











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
