"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Server = /** @class */ (function () {
    function Server(port) {
        this.port = port;
        this.app = express_1.default();
    }
    Server.prototype.addMiddleware = function (middleware) {
        this.app.use(middleware);
    };
    Server.prototype.listen = function () {
        console.log("=============== listening at port " + this.port + " ====================");
        return this.app.listen(this.port);
    };
    return Server;
}());
exports.default = Server;
