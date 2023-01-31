const jwt = require("jsonwebtoken");
const { BadRequestErr } = require("../errors");

function authorize(req, res, next) {
    const authHeader = req.headers.authorization;
    const authRegex = /^Bearer .+$/i;

    if (!authHeader || !authRegex.test(authHeader)) {
        throw new BadRequestErr("Invalid authorization header");
    }

    const token = authHeader.split(" ")[1];
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
}

module.exports = authorize;