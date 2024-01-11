import { error } from 'console';
import sequelize  from '../../config/db'; // Import connection instance from Sequelize
import Customer from '../../models/customer.model';


// get all customer 
export const getAllCustomers = async (req:any, res:any) => {
    try {
        Customer.findAll()
        .then(customers => {
            // Chuyển đổi dữ liệu thành JSON và trả về cho client
            const customersJSON = customers.map(customer => customer.toJSON());
            res.status(200).json(customersJSON);
        })
        .catch(err => {
            console.error('Lỗi khi truy vấn bảng Customers:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn bảng Customers' });
        });
        
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: "Error occurred" });
    }
};

// create new customer 
export const registerCustomer = async(req: any , res: any) => {
    const {customerName, customerPhone, customerAddress, username, password}= req.body;
    try {
        Customer.create({
            customerName: customerName,
            customerPhone: customerPhone,
            customerAddress: customerAddress,
            username: username,
            password: password
        })
        .then(newCustomer => {
            res.status(200).json(newCustomer.toJSON());
        })
        .catch(error=> {
            console.log("Error when create new customer ");
            res.status(500).json({ message: "Error occurred" });
        }
        )
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: "Error when create new customer " });
    }

}




