import connect from "../../Utils/mongoDbConnection.js";

import User from "../../models/UserSchema.js";
import { varifyHash } from "bcrypt-inzi";
import JsonWebToken  from "jsonwebtoken";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';

connect()


export default async function login(req,res){
    const {email,password} = req.body

 if(!email || !password){
    return res.status(404).json({msg:"email/password Not Found"})  
 }
    
 const user =  await User.findOne({email})
 if(!user) {
   return res.status(401).json({"msg":"You Are Not Registered User"})  
 }

 varifyHash(password, user.password).then(async result => {
   if (result) {
    const token =  JsonWebToken.sign({
         id:user._id,
         name:user.name,
         email:user.email
      },"hello world",
      {
          expiresIn:"2d"
      })

  
    res.status(200).json({
      msg:"You Are Logged In Successfully",
      "token":token
    })

   } else {
      res.status(500).json({"msg":"Email Or Password Doesn't Match"})
   }
}).catch(e => {
   console.log("error: ", e)
})


}  