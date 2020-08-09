"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
require("./database/db");
var server_1 = __importDefault(require("./server"));
var auth_1 = require("./middleware/auth");
var route_1 = __importDefault(require("./routes/route"));
var constantserver_1 = __importDefault(require("./constantserver"));
var app = new server_1.default(constantserver_1.default.PORT);
app.addMiddleware(body_parser_1.default.json());
app.addMiddleware(auth_1.validateToken);
app.addMiddleware(route_1.default);
app.listen();
