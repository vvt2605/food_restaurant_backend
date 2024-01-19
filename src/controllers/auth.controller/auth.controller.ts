
import { Request, Response } from 'express';
import * as authService from '../../services/auth.services';
import Account from '../../models/account.model';
import { env } from '../../env';
import User, { Role } from '../../models/user.model';
import { Op } from 'sequelize';




// login 
export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        let account: any = {};
        account = await Account.findOne({
            where: {
                username, // ES6 shorthand for { username: username }
                // username: username
            },
        });
        // If account not exist, notify and request registration
        if (account == null) {
            return res.status(404).json({ message: 'account not found' });
        }

        // If account exists, check password
        const isMatch = await authService.comparePassword(password, account.password);
        console.log("Demo" + isMatch)
        // If password does not match, notify wrong password
        if (!isMatch) {
            return res.status(401).json({ message: 'Wrong password' });
        }

        // If username exists, login success, return JWT
        const jwtToken = await authService.signJWT({ index: account.accountID, username, role: account.role });

        // Set token to cookie
        const cookieConfig = {
            httpOnly: true,
            secure: true,
            path: '/',
            sameSite: 'lax',
            expires: new Date(Date.now() + 1000 * 60 * Number(env.app.jwtExpiresIn)),
        };

        if (account.role === 'user' || account.role === 'admin')
            res.cookie('admintoken', jwtToken, {
                httpOnly: true,
                secure: true,
                domain: env.app.adminUrl,
                path: '/',
                sameSite: 'lax',
                expires: new Date(
                    Date.now() + 1000 * 60 * Number(env.app.jwtExpiresIn)
                ),
            });
        res.status(200).json({
            message: 'Login success',
            data: {
                accessToken: jwtToken,
            },
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

// logout
export const logout = async (req: any, res: Response) => {
    try {
        const user = req.user!;
        console.log("User: ")
        console.log(user)
        // Determine the cookie name based on user role
        const cookieName = user.role === 'admin' || user.role === 'user'
            ? 'admintoken'
            : 'usertoken';

        // Clear the cookie with appropriate options
        res.clearCookie(cookieName, {
            domain: user.role === 'admin' ? env.app.adminUrl : env.app.userUrl,
            path: '/',
        });

        // End the response
        res.status(200).json("logout success");
    } catch (error) {
        console.error('Error during logout:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


//register 
export const register = async (req: any, res: any) => {
    try {
        let { name, phone, address, username, password, role } = req.body;


        // Check if username already exists in the database
        const existingUser = await Account.findOne({
            where: {
                [Op.or]: [{ username }],
            },
        });

        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        else {
            // Hash the password before storing in the database
            const hashedPassword = await authService.hashPassword(password)
            if (role !== Role.ADMIN) {
                role = Role.USER
            }
            Account.create({
                name: name,
                phone: phone,
                address: address,
                username: username,
                password: hashedPassword,
                role: role
            })
                .then(newAccount => {
                    newAccount = newAccount.toJSON();
                    res.status(200).json({
                        data: newAccount,
                        message: "create success "
                    });
                })
                .catch(error => {
                    console.log("Error when create new account ");
                    res.status(500).json({ message: "Error occurred" });
                }
                )
                
        }

    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
