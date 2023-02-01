const jwt = require("jsonwebtoken");
const { BadRequestErr, UnauthorizedErr } = require("../errors");


function authorize(req, res, next) {
    const authHeader = req.headers.authorization;
    const authRegex = /^Bearer .+$/i;

    if (!authHeader || !authRegex.test(authHeader)) {
        throw new BadRequestErr("Invalid authorization header");
    }

    const token = authHeader.split(" ")[1];
    req.user = decodeToken(token);
    next();
}


function decodeToken(token) {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        throw new UnauthorizedErr()
    }
}


module.exports = authorize;