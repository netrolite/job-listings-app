const { isArray } = Array;
const { NotFoundErr } = require("../errors");

function sendOrThrowIfNotFound(req, res) {
    const { dataToSend: data } = req;
    const response = { data };

    if (isArray(data)) {
        if (!data.length) throw new NotFoundErr();
        response.resultsAmount = data.length;
    }
    else if (!data) throw new NotFoundErr();

    res.status(200).json(response);
}

module.exports = sendOrThrowIfNotFound;