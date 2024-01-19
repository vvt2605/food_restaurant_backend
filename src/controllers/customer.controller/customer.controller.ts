import { error } from 'console';
import sequelize from '../../config/db'; // Import connection instance from Sequelize
import { Op } from "sequelize";
import User from '../../models/user.model';

// get all customer (for Admin)
export const getAllCustomers = async (req: any, res: any) => {
    try {
        User.findAll({
            where: {
                role: {
                    [Op.ne]: 'admin', // [Op.ne] là phép toán "not equal"
                },
            },
        })
            .then(customers => {
                // Chuyển đổi dữ liệu thành JSON và trả về cho client
                
                const customersJSON = customers.map(customer => customer.toJSON());
                res.status(200).json({
                    "data": customersJSON,
                    "message": "success"
                });
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
export const registerCustomer = async (req: any, res: any) => {
    const { name, phone, address, username, password } = req.body;
    try {
        User.create({
            name: name,
            phone: phone,
            address: address,
            username: username,
            password: password
        })
            .then(newCustomer => {
                res.status(200).json(newCustomer.toJSON());
            })
            .catch(error => {
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
// for Admin
// find customer 
export const findCustomer = async (req: any, res: any) => {
    const { name } = req.body;
    try {
        // Sử dụng Op.iLike để thực hiện tìm kiếm không phân biệt chữ hoa chữ thường
        
        const customers = await User.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                }
            }
        });

        // Kiểm tra nếu không có khách hàng nào được tìm thấy
        if (customers.length === 0) {
            res.status(404).json({ message: "No customers found with the provided name." });
            return;
        }
        // Trả về danh sách khách hàng được tìm thấy
        res.status(200).json({
            data: customers,
            message: "find success"
        });
    } catch (error) {
        console.error('Error when finding customers:', error);
        res.status(500).json({ message: "Error when finding customers." });
    }
}




