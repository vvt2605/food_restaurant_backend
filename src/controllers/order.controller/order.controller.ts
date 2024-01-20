import Order from "../../models/order.model";
import OrderItem from "../../models/orderItems.model";
import { Op } from "sequelize";
//get all orders 
export const getAllOrders = async(req: any, res: any) => {
    try {
        Order.findAll()
            .then(orders => {
                // Chuyển đổi dữ liệu thành JSON và trả về cho client
                
                const ordersJSON = orders.map(customer => customer.toJSON());
                res.status(200).json({
                    "data": ordersJSON,
                    "message": "success"
                });
            })
            .catch(err => {
                console.error('Lỗi khi truy vấn bảng orders:', err);
                res.status(500).json({ error: 'Lỗi khi truy vấn bảng orders' });
            });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: "Error occurred" });
    }
}

//post create new order

export const createOrder = async (req: any, res: any) => {
    try {
      // Assume req.body contains necessary data for Order creation
      const { OrderIN, OrderItemsIN } = req.body;
      const accountID = OrderIN.accountID;
    //   const tableID = OrderIN.tableID;
      const status = OrderIN.status;
    //   console.log(accountID,tableID,status)
      // Create Order
      const order = await Order.create({ accountID, status });

      // Create OrderItems
      if (OrderItemsIN) {
        const createdOrderItems = await Promise.all(
            OrderItemsIN.map(async (item: any) => {
            return await OrderItem.create({
              orderID: order.get("orderID"),
              foodID: item.foodID,
              quantity: item.Quantity,
            });
          })
        );
        
        res.status(200).json({ message: 'success' });
    } 
}
    catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

