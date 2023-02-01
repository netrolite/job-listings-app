const mongoose = require("mongoose");
const { Schema } = mongoose;

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
        maxlength: 200
    },
    position: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 200
    },
    status: {
        type: String,
        enum: ["pending", "interview", "rejected"],
        default: "pending"
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true })


// all middleware must be defined before compiling the model as below
const Job = mongoose.model("Job", JobSchema);
module.exports = Job;