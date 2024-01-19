import { env } from '../env';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { raw } from 'mysql2';

const JWTPrivateKey = env.app.jwtPrivateKey;
const GOOGLE_CLIENT_ID = env.app.googleClientId;
const saltRounds = 10;

export const getGooglePayload = async (credential: string) => {
    const client = new OAuth2Client(GOOGLE_CLIENT_ID);
    const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: GOOGLE_CLIENT_ID,
    });
    if (!ticket) throw new Error('Invalid credential');
    return ticket.getPayload();
};

export const signJWT = ({ index, username, role } : {
    index: string,
    username: string;
    role: string;
}) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            {index, username, role },
            JWTPrivateKey,
            { expiresIn: env.app.jwtExpiresIn + 'm' },
            (err, token) => {
                if (err) reject(err);
                resolve(token);
            }
        );
    });
};

export const verifyJWT = (token: string) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, JWTPrivateKey, (err, payload) => {
            if (err) reject(err);
            resolve(payload);
        });
    });
};

export const hashPassword = (rawPassword: string) => {
    return bcrypt.hash(rawPassword, saltRounds);
};

export const comparePassword = (rawPassword: string, hash: string) => {
    
    return bcrypt.compare(rawPassword, hash);
    // return rawPassword === hash ? true: false;
};
