import connect from "../../../Utils/mongoDbConnection.js";
import Quiz from "../../../models/QuizSchema.js"
connect()

export default async function QuizRoute(req, res) {
//     if (req.method === 'PUT') {
    
//        const question =  await Quiz.findById(req.query.id)

// if (!question) {
//     return res.status(500).json({msg:"No Question found"})
// }


// if (question) {
//     return res.status(200).json({question})
// }

// await Quiz.findByIdAndUpdate(req.query.id,)


//     }else{
        const question =  await Quiz.findById(req.query.id)
        if (!question) {
            return res.status(500).json({msg:"No Question found"})
        }
        await question.delete()
        res.status(200).json({
            success: true,
            msg: "product is deleted successfully"
        })
    // }
}