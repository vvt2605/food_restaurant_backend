import Food from "../../models/food.model";

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



