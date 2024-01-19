import { config } from 'dotenv';
import path from 'node:path';

config({ path: path.resolve(__dirname, '../.env') });
/**
 * Environment variables
 */

export const env = {
    node: process.env.NODE_ENV || 'development',
    app: {
        routePrefix: process.env.APP_ROUTE_PREFIX || 'api',
        googleClientId: process.env.GOOGLE_CLIENT_ID || 'googleClientId',
        jwtPrivateKey: process.env.JWT_PRIVATE_KEY || 'jwtPrivateKey',
        jwtExpiresIn: process.env.TOKEN_EXPIRY || 3600,
        adminUrl:
            process.env.NODE_ENV === 'production'
                ? process.env.ADMIN_URL_PROD
                : process.env.ADMIN_URL_DEV,
        userUrl:
            process.env.NODE_ENV === 'production'
                ? process.env.USER_URL_PROD
                : process.env.USER_URL_DEV,
    }
};