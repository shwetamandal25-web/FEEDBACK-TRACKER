const express = require("express");

const router = express.Router();

const Feedback = require("../schema/schema");


router.post("/", async (req, res) => {

    try {

        const newFeedback = new Feedback({

            name: req.body.name,

            number: req.body.number,

            email: req.body.email,

            gender: req.body.gender,

            rating: req.body.rating,

            feedback: req.body.feedback

        });

        const savedFeedback = await newFeedback.save();

        res.status(201).json({
            message: "Feedback submitted successfully",
            data: savedFeedback
        });

    } catch (error) {

        console.log("SAVE ERROR:", error);

        res.status(500).json({
            message: "Failed to save feedback",
            error: error.message
        });

    }

});


router.get("/", async (req, res) => {

    try {

        const feedbacks = await Feedback.find();

        res.status(200).json(feedbacks);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Failed to fetch feedback",
            error: error.message
        });

    }

});


module.exports = router;