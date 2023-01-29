require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connectDB");
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.status(200).json({
        success: true
    })
});

(async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port);
        console.log(`DB connected. Listening on port ${port}`);
    } catch (err) {
        console.error(err);
    }
})();