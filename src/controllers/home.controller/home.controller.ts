import sequelize from '../../config/db';
export const getHome = async (req: any, res: any) => {
    try {
        const results = await sequelize.query('SELECT username, password FROM Customer');
        res.status(200).json({ data: results });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: "Error occurred" });
    }
};
