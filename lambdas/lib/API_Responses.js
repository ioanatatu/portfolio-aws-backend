const Responses = {
    _200(data = {}) {
        return {
            headers,
            statusCode: 200,
            body: JSON.stringify(data),
        };
    },
    _400(data = {}) {
        return {
            headers,
            statusCode: 400,
            body: JSON.stringify(data),
        };
    },
};

module.exports = Responses;
/*
 *
 *
 *
 *
 */
const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Origin": "*",
};
