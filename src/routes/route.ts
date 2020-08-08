import express from "express";
import agencyRoute from "./agency.router";
import clientRouter from "./client.router";
const router = express.Router();


router.get("/", agencyRoute.rootRoute);
router.post("/createAgency",agencyRoute.createAgency);
router.put("/updateClient/:clientId",clientRouter.updateClient);
router.get("/getAgentWithMaxBiller",agencyRoute.getMaxBillerAgent)

export default router