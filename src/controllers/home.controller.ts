import pool from '../config/db'; // Import MysqlError từ mysql2
export const getHome = async (req: any, res: any) => {
    try {
        const results = await pool.query('SELECT username, password FROM Customer');
        res.status(200).json({ data: results });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: "Error occurred" });
    }
};
