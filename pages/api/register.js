import connect from "../../Utils/mongoDbConnection.js";

import User from "../../models/UserSchema.js";

import { 
   stringToHash
} from "bcrypt-inzi"

connect()


export default async function register(req,res){
    const {name,email,password} = req.body

 if(!name || !email || !password){
    return res.status(404).json({"msg":"name,email and password are required"})  
 }

 const find =  await User.findOne({email})
 if(find) {
   return res.status(401).json({"msg":"You Are Already a User"})  
 }

 stringToHash(req.body.password).then( async hash => {
   req.body.password = hash
   await User.create(req.body).then((result) => {  
      res.status(201).json({"user":result})
   }).catch((err) => {
      res.status(500).json({"msg":err})
   });

})
}