const mongoose = require("mongoose");
const CartModel = require("../Models/CartModel");
const ProfileModel = require("../Models/ProfileModel");
const InvoiceModel = require("../Models/InvoiceModel");
const InvoiceProductModel = require("../Models/InvoiceProductModel");
const PaymentSettingModel = require("../Models/PamentSettingModel");
const ObjectID=mongoose.Types.ObjectId
const FormData = require('form-data');
const axios = require("axios");



// =============Step 01: Calculate Total Payable & Vat=============
const CreateInvoiceService = async (req) =>{
    try{

        

    }catch(e){
        return {status:"fail", message:"Something Went Wrong"}
    }
}


// =============Step 02: Prepare  Customer Details & Shipping Details===========



// =============Step 03: Transaction & Other's ID==============




// =============Step 04: Create Invoice====================




// =============Step 05: Create Invoice Product================




//=============Step 06: Remove Carts===================





//=============Step 07: Prepare SSL Payment==============

const PaymentFailService = async (req) =>{
    try{

    }catch(e){
        return {status:"fail", message:"Something Went Wrong"}
    }
}




const PaymentCancelService = async (req) =>{
    try{

    }catch(e){
        return {status:"fail", message:"Something Went Wrong"}
    }
}





const PaymentIPNService = async (req) =>{
    try{

    }catch(e){
        return {status:"fail", message:"Something Went Wrong"}
    }
}




const PaymentSuccessService = async (req) =>{
    try{

    }catch(e){
        return {status:"fail", message:"Something Went Wrong"}
    }
}




const InvoiceListService = async (req) =>{
    try{

    }catch(e){
        return {status:"fail", message:"Something Went Wrong"}
    }
}





const InvoiceProductListService = async (req) =>{
    try{

    }catch(e){
        return {status:"fail", message:"Something Went Wrong"}
    }
}







module.exports={
    CreateInvoiceService,
    PaymentFailService,
    PaymentCancelService,
    PaymentIPNService,
    PaymentSuccessService,
    InvoiceListService,
    InvoiceProductListService
}