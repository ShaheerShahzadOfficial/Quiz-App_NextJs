import connect from "../../Utils/mongoDbConnection.js";
import Quiz from "../../models/QuizSchema.js"
connect()


export default async function QuizRoute(req, res) {

    if (req.method === 'POST') {

        const { question, option, CorrectAnswer, Batch, course, time } = req.body

        if (!question || !option || !CorrectAnswer || !Batch || !course || !time) {
            return res.status(500).json({ "msg": "All Always Are Required" })
        }

        await Quiz.create({ question, option, CorrectAnswer, Batch, course, time }).then((result) => {
            res.status(201).json({ "quiz": result })
        }).catch((err) => {
            res.status(500).json({ "msg": err })
        });

    } else {
        await Quiz.find().then((result) => {
            res.status(200).json({ "quiz": result })
        }).catch((err) => {
            res.status(500).json({ "msg": err })
        });         
    }

}