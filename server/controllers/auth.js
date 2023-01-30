const User = require("../models/User");

async function signup(req, res) {
    const user = await User.create(req.body);
    const token = user.createJWT();
    res.status(200).json({ name: user.name, token });
}

async function signin(req, res) {
    const { password, email } = req.body;

    const user = await User.findOne({ email });
    if (!user) res.status(400).json({ message: "user does not exist"});
    if (!await user.comparePasswords(password)) {
        res.status(400).json({ message: "wrong password" });
    }

    const token = user.createJWT();
    res.status(200).json({ token, name: user.name });
}

module.exports = {
    signup,
    signin
}