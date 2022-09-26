import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },role: {
        type: String,
        default: "Student"          
    },
    AlowedToAttemptQuiz: {
        type: Boolean,
        default: false          
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.models.User || mongoose.model('User',userSchema)
