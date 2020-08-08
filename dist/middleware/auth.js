"use strict";
function validateToken(req, res, next) {
    var authorization = req.headers.authorization;
    if (!authorization || authorization !== "123") {
        res.json({
            messsage: "Authorization failed, Invalid Token",
            statusCode: 401,
            data: {}
        });
    }
    else {
        next();
    }
}
module.exports = {
    validateToken: validateToken
};
