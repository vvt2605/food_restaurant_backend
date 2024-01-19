
import Account from "../../models/account.model"
import { Op } from "sequelize";

// get all account for admin
export const getAllAccount = async (req: any, res: any) => {
    try {
        const allAccounts = await Account.findAll();
        // Kiểm tra nếu không có khách hàng nào được tìm thấy
        if (allAccounts.length === 0) {
            res.status(404).json({ message: "No account" });
            return;
        }
        // Trả về danh sách khách hàng được tìm thấy
        res.status(200).json({
            data: allAccounts,
            message: "find all accounts success"
        });
    }
    catch (error) {
        console.error('Error when get all count:', error);
        res.status(500).json({ message: "Error when get all account " });
    }
}

// create new account 
export const registerAccount = async (req: any, res: any) => {
    const { name, phone, address, username, password } = req.body;
    try {
        const existAccount = await Account.findOne(
            {
                where: {
                    username: {
                        [Op.like]: username
                    }
                }
            }
        )
        if (existAccount !== null ) {
            res.status(200).json({message: "exist account"})
        }
        else {
            Account.create({
                name: name,
                phone: phone,
                address: address,
                username: username,
                password: password
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
        
    }
    catch (error) {
        console.log("Error when create new account ", error);
        res.status(500).json({ message: "Error when create new account" })
    }
}

// update account 
export const updateAccount = async (req:any, res: any) => {
    const { name, phone, address, username, password } = req.body;
    
}