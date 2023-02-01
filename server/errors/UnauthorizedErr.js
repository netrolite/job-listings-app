class UnauthorizedErr extends Error {
    constructor(message) {
        super(message || "unauthorized");
        this.statusCode = 401;
    }
}

module.exports = UnauthorizedErr;