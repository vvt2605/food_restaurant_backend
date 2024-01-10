import { AuthRequest } from '../interfaces/request';
import { Role } from '../models/customer.model';
import { NextFunction, Response } from 'express';

export const isAdmin = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    // if (req.customer?.role !== Role.ADMIN) {
    //     res.status(403).json({
    //         success: false,
    //         message: 'Forbidden',
    //     });
    // } else {
    //     next();
    // }
    return true;
};