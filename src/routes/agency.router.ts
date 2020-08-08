import { Request, Response, NextFunction } from 'express'
import AgencyModal from "../modals/Agency.modal";
import ClientModal from '../modals/Client.modal';
function rootRoute(req: Request, res: Response, next: NextFunction): void {
    res.json({
        message: "welcome to the agent-client api",
        statusCode: 200,
        data: {

        }
    })
}

async function createAgency(req: Request, res: Response, next: NextFunction) {
    let { agencyDetails, clientDetails } = req.body;
    try {
        let agency = new AgencyModal(agencyDetails);
        let client = new ClientModal(clientDetails);

        if (agencyDetails.AgencyId !== clientDetails.AgencyId) {
            res.json({
                message: "Client doen't belongs to the agent",
                statusCode: 400,
                data: {
                }
            })
            return
        }
        let checkAgentValidity = await agency.validate();
        let checkClientValidity = await client.validate();

        let saveAgent = await agency.save();
        let saveClient = await client.save();
        if (saveAgent && saveClient) {
            res.json({
                message: "Data saved successfully",
                statusCode: 200,
                data: {}
            })
        }

    } catch (error) {
        let message: String = "something went wrong";
        if (error && error.message) {
            message = error.message
        }
        res.json({
            message: message,
            statusCode: 400,
            data: {}

        })
    }

}

async function getMaxBillerAgent(req: Request, res: Response, next: NextFunction) {
    try {
        let details = await ClientModal.aggregate([
            {
                $group: {
                    _id: "$AgencyId",
                    totalBill: { $sum: "$TotalBill" },
                    clients: { $push: "$$ROOT" }
                }
            }, {
                $sort: { totalBill: -1 }
            },
            { $limit: 1 },
            {
                $lookup: {
                    from: "agencies",
                    localField: "_id",
                    foreignField: "AgencyId",
                    as: "AgencyDetails"
                }
            }
        ])
        res.json({
            message: "success",
            statusCode: 200,
            data: details
        })
    } catch (error) {
        res.json({
            message: "Something went wrong",
            statusCode: 500,
            data: {}

        })
    }
}

export = {
    rootRoute,
    createAgency,
    getMaxBillerAgent
}