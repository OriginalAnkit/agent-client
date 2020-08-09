"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var constantserver_1 = __importDefault(require("../constantserver"));
function validateToken(req, res, next) {
    var authorization = req.headers.authorization;
    if (!authorization || authorization !== constantserver_1.default.SECRET) {
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
