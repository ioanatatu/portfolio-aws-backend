const Responses = {
    _DefaultResponse(statusCode = 502, data = {}) {
        return {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Methods": "*",
                "Access-Control-Allow-Origin": "*",
            },
            statusCode,
            body: JSON.stringify(data),
        };
    },

    _200(data = {}) {
        return this._DefaultResponse(200, data);
    },

    _201(data = {}) {
        return this._DefaultResponse(200, data);
    },

    _400(data = {}) {
        return this._DefaultResponse(400, data);
    },
    _404(data = {}) {
        return this._DefaultResponse(404, data);
    },
    _409(message) {
        return this._DefaultResponse(
            409,
            message || "This project name already exists."
        );
    },
};

module.exports = Responses;
