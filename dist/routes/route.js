"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var agency_router_1 = __importDefault(require("./agency.router"));
var client_router_1 = __importDefault(require("./client.router"));
var router = express_1.default.Router();
router.get("/", agency_router_1.default.rootRoute);
router.post("/createAgency", agency_router_1.default.createAgency);
router.put("/updateClient/:clientId", client_router_1.default.updateClient);
router.get("/getAgentWithMaxBiller", agency_router_1.default.getMaxBillerAgent);
exports.default = router;
