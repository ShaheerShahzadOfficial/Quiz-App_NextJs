import connect from "../../Utils/mongoDbConnection.js";

import User from "../../models/Schema.js";

connect()


export default async function login(req,res){
    const {email,password} = req.body

 if(!email || !password){
    return res.status(404).json({msg:"email/password Not Found"})  
 }
    


}