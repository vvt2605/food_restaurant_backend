import Food from "../../models/food.model";
import { Op } from "sequelize";

//get all Foods 
export const getAllFoods = async (req: any, res: any) => {
    try {
        Food.findAll()
            .then(foods => {
                const foodsJSON = foods.map(food => food.toJSON());

                res.status(200).json({ "data": foodsJSON });
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
// create new food 
export const registerFood = async (req: any, res: any) => {
    const { name, price, status, image } = req.body;
    try {
        Food.create({
            name: name,
            price: price,
            status: status,
            image: image
        })
            .then(newFood => {
                res.status(200).json({
                    data: newFood.toJSON(),
                    message: "Create success new food"
                });
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

// search food by word
export const foodByName = async (req:any, res: any) => {
    try {
        const {name } = req.body
        console.log(name)
        Food.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                }
        })
            .then(foods => {
                const foodsJSON = foods.map(food => food.toJSON());

                res.status(200).json({ "data": foodsJSON });
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


// search food by word
export const findByID = async (req:any, res: any) => {
    try {
        const {ID } = req.body
        Food.findOne({
                where: {
                    foodID: ID }
        })
            .then(foods => {
               
                res.status(200).json({ "data": foods?.toJSON() });
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
//
// update food by ID
export const updateFood = async (req: any, res: any) => {
    const foodID = req.params.id; // Lấy ID từ URL
    const { name, price, status, image } = req.body;

    try {
        // Kiểm tra xem food có tồn tại không
        const foodToUpdate = await Food.findByPk(foodID);

        if (!foodToUpdate) {
            return res.status(404).json({ message: "Food not found" });
        }

        // Cập nhật thông tin food
        await foodToUpdate.update({
            name: name,
            price: price,
            status: status,
            image: image
        });

        res.status(200).json({ message: "Food updated successfully" });
    } catch (error) {
        console.error("Error when updating food:", error);
        res.status(500).json({ message: "Error occurred while updating food" });
    }
};

// delete food
// delete food by ID
export const deleteFood = async (req: any, res: any) => {
    const foodID = req.params.id; // Lấy ID từ URL

    try {
        // Kiểm tra xem food có tồn tại không
        const foodToDelete = await Food.findByPk(foodID);

        if (!foodToDelete) {
            return res.status(404).json({ message: "Food not found" });
        }

        // Xóa món ăn
        await foodToDelete.destroy();

        res.status(200).json({ message: "Food deleted successfully" });
    } catch (error) {
        console.error("Error when deleting food:", error);
        res.status(500).json({ message: "Error occurred while deleting food" });
    }
};




