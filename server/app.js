require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
// routes
const authRoute = require("./routes/auth");
// middleware
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");
const connectDB = require("./db/connectDB");
const port = process.env.PORT || 5000;


app.use(express.json());

app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
    res.status(200).end();
});

app.use(notFound);
app.use(errorHandler);


(async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port);
        console.log(`DB connected. Listening on port ${port}`);
    } catch (err) {
        console.error(err);
    }
})();