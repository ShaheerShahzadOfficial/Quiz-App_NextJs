import User from "../../models/UserSchema"
import connect from "../../Utils/mongoDbConnection"


connect()

export default async function getAllUser(req,res) {
    
await User.find().then((result) => {
    res.status(200).json({user:result})
}).catch((err) => {
    res.status(500).json({err})
});


};
