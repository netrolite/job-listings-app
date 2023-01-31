class NotFoundErr extends Error {
    constructor(message) {
        super(message || "Not found");
        this.statusCode = 404;
    }
}

module.exports = NotFoundErr;