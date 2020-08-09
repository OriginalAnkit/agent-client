"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var constantserver_1 = __importDefault(require("../constantserver"));
mongoose_1.default.connect(constantserver_1.default.MONGOURL, { useNewUrlParser: true });
mongoose_1.default.connection.once('open', function () {
    console.info('Connected to Mongo via Mongoose');
});
mongoose_1.default.connection.on('error', function (err) {
    console.error('Unable to connect to Mongo via Mongoose');
});
