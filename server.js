const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./model/mongoose");
const feedbackRoute = require("./routes/feedback");

dotenv.config();

const app = express();

const PORT = process.env.PORT

app.use(cors());
app.use(express.json());

connectDB();

app.use("/feedback", feedbackRoute);

app.get("/", (req, res) => {
    res.send("Student Feedback Manager API is running");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
