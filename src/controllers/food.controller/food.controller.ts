import Food from "../../models/food.model";

//get all Foods 
export const getAllCustomers = async (req:any, res:any) => {
    try {
        Food.findAll()
        .then(foods => {
            const foodsJSON = foods.map(food => food.toJSON());
            res.status(200).json(foodsJSON);
        })
        .catch(err => {
            console.error('Lỗi khi truy vấn bảng Foods:', err);
            res.status(500).json({ error: 'Lỗi khi truy vấn bảng Foods' });
        });
    }
    catch (error) {
        console.error('Error when get all food :', error);
        res.status(500).json({ message: "Error occurred get all food " });
    }

}

