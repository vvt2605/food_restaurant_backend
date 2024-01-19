import { AuthRequest } from '../interfaces/request';
import { Role } from '../models/user.model';
import { NextFunction, Response } from 'express';
import { verifyJWT } from '../services/auth.services';

export const isAdmin1 = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    
    if (req.customer?.role !== Role.ADMIN) {
        res.status(403).json({
            success: false,
            message: 'Forbidden',
        });
    } else {
        next();
    }
    return true;
};
export const isAdmin = async (req: any, res: Response, next: NextFunction) => {
    try {
        const  user = req.user!;
        if (user.role !== Role.ADMIN) {
            res.status(403).json({
                success: false,
                message: 'Forbidden',
            });
        } else {
            next();
        }
        return true;
    } catch (error) {
        isAdminResError(res);
    }
};

const isAdminResError = (res: Response) => {
    res.status(403).json({
        success: false,
        message: 'Forbidden',
    });
};