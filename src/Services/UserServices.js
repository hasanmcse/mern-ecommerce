const EmailSend = require("../Utility/EmailHelper")
const UserModel =  require('../Models/UserModel')
const {EncodeToken} = require("../utility/TokenHelper");
const ProfileModel = require('../Models/ProfileModel')




const UserOTPService = async (req) => {

    try{
        let email = req.params.email;
        let code=Math.floor(100000+Math.random()*900000);
        let EmailText=`Your verification code is = ${code}`
        let EmailSubject = 'Email Verification'

        await EmailSend(email, EmailText, EmailSubject);
        await UserModel.updateOne({email:email},{$set:{otp:code}}, {upsert:true})
        return {status:"success", message:"6 digit OTP has been send"}
        }
        catch(e){
            return {status:"fail", message:"Something Went Wrong"}
        }
    }




const VerifyOTPService = async (req) => {
   
    try{
        let email=req.params.email;
        let otp=req.params.otp;

// user count
let total = await UserModel.find({email:email, otp:otp}) .count('total');
     if(total===1){
            // User ID read
            let user_id=await UserModel.find({email: email, otp: otp}).select('_id')
            //User token create
            let token= EncodeToken(email,user_id[0]['_id'].toString())
            // OTP code update to 0
            await UserModel.updateOne({email:email}, {$set:{otp:'0'}})
            return {status:"success", message:"Valid OTP", token:token}
        }else{
            return {status:"fail", message:"Something Went Wrong"}
        }
    }
    
    catch (e) {
        return {status:"fail", data:"Something Went Wrong"}
    }
   
}




const SaveProfileService = async (req) => {
    try{
        let user_id=req.headers.user_id;
        let reqBody=req.body;
        reqBody.userID = user_id;
        await ProfileModel.updateOne({userID:user_id}, {$set:reqBody}, {upsert:true})
        return {status:"success", message:"Profile Save Changed"}
    }
    catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
}



const ReadProfileService = async (req) => {
    try{
        let user_id=req.headers.id;
        let data=await ProfileModel.find({userID: user_id})
        return {status:"success", data:data}
    }
    catch (e) {
        return {status:"fail", data:"Something Went Wrong"}
    }
}




module.exports={
    UserOTPService,
    VerifyOTPService,
    SaveProfileService,
    ReadProfileService
}