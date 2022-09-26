import connect from "../../../Utils/mongoDbConnection.js";
import User from "../../../models/UserSchema.js";

connect()


export default async function UpdateUserRole(req, res) {

const user = await User.findById(req.query.id)

const {AlowedToAttemptQuiz,role} = req.body

if (!user) {
    return res.status(404).json({msg:"No User Found"})
}

await User.findByIdAndUpdate(req.query.id,{AlowedToAttemptQuiz,role}).then((result) => {
    res.status(200).json({msg:"User Updated Successfully"})
}).catch((err) => {
    res.status(500).json({msg:err})
});


}