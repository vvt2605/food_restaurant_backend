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



