import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    question: String,
    option:[{
        type:String
    }],
    CorrectAnswer:String,
    Batch:Number,
    course:String,
    time:Number
})
module.exports = mongoose.models.Quiz || mongoose.model('Quiz',quizSchema)
