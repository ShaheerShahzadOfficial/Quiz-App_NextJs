import connect from "../../Utils/mongoDbConnection.js";

import User from "../../models/Schema.js";

connect()


export default async function register(req,res){
    const {name,email,password} = req.body

 if(!name || !email || !password){
    return res.status(404).json({msg:"name/email/password Not Found"})  
 }

 const find =  await User.findOne({email})
 if(find) {
   return res.status(401).json({msg:"You Are Already a User"})  
 }

    
await User.create(req.body).then((result) => {  
   res.status(201).json({user:result})
}).catch((err) => {
   res.status(500).json({msg:err})
});

}