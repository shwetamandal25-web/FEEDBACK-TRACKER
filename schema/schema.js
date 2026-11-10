const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },

    number: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 10
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minlength: 5,
        maxlength: 100
    },

    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female", "Other"]
    },

    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },

    feedback: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 500
    }

}, {
    timestamps: true
});


const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;

