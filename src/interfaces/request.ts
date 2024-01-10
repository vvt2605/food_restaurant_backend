import { Request } from 'express';

export interface AuthRequest<
    P extends Record<string, any> = {},
    B extends Record<string, any> = {},
    Q extends Record<string, any> = {},
> extends Request {
    customer?: {
        role: string,
        username: string,
    }
    body: Request['body'] & B;
    params: Request['params'] & P;
    query: Request['query'] & Q;
}