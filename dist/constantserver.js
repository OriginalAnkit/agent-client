"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
var constants = dotenv_1.default.config({ path: path_1.default.join(__dirname, "../.env") }).parsed;
module.exports = {
    PORT: constants.PORT,
    SECRET: constants.SECRET
};
