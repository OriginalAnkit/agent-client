import { Request, Response, NextFunction } from 'express';
import serverContant from "../constantserver";

function validateToken(req: Request, res: Response, next: NextFunction) {
    let { authorization } = req.headers;
    if (!authorization || authorization !== serverContant.SECRET) {
        res.json({
            messsage: "Authorization failed, Invalid Token",
            statusCode: 401,
            data: {}
        })
    } else {
        next()
    }
}

export ={
    validateToken
}