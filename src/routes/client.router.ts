import { Request, Response, NextFunction } from 'express'
import ClientModal from '../modals/Client.modal';

async function updateClient(req: Request, res: Response, next: NextFunction) {
    let clientId = req.params.clientId;
    let body = req.body
    if (body && body.ClientId) {
        delete body.ClientId;
    }
    try {
        let updatedClient = await ClientModal.updateOne({ ClientId: clientId }, { $set: body });
        if (updatedClient && updatedClient.n == 0) {
            return res.json({
                message: "Client not found",
                statusCode: 404,
                data: {}
            })
        } else {
            res.json({
                message: "Client updated Successfully",
                statusCode: 200,
                data: {}
            })
        }

    } catch (error) {
        res.json({
            message: "Something went wrong",
            statusCode: 500,
            data: {}
        })
    }
}



export ={
    updateClient
}