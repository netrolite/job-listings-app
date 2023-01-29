const User = require("../models/User");

async function signup(req, res) {
    const user = await User.create(req.body);
    const token = user.createJWT();
    res.status(200).json({ name: user.name, token });
}

async function signin(req, res) {
    res.status(200).json(req.body);
}

module.exports = {
    signup,
    signin
}