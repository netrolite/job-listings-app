const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const emailRegex = /^[\w-]+@([\w-]+\.)+\w{2,4}$/;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: emailRegex,
        maxlength: 254
    },
    password: {
        type: String,
        required: true
    }
})

UserSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})


const User = mongoose.model("User", UserSchema);
module.exports = User;