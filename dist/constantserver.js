"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
var constants = dotenv_1.default.config({ path: path_1.default.join(__dirname, "../.env") });
console.log(constants);
module.exports = {
    PORT: 3000,
    SECRET: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InRlc3QgdG9rZW4iLCJpYXQiOjE1MTYyMzkwMjJ9.ZgDB4ZYa7GaqgvIMyfjpwZmaqLOlVeqkgGYgZFpSeJY"
};
