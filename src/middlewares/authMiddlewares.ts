import { NextFunction, Request, Response } from 'express';
import { verifyJWT } from '../services/auth.services';


export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.usertoken || req.cookies.admintoken;
    try {
        if (token) {
            const user = await verifyJWT(String(token));
            Object.assign(req, { user });
            next();
            console.log("Auth success")
        } else {
            sendUnauthorizedResponse(res);
        }
    } catch (error) {
        sendUnauthorizedResponse(res);
    }
};

const sendUnauthorizedResponse = (res: Response) => {
    res.status(401).json({
        success: false,
        message: 'Unauthorized',
    });
};
