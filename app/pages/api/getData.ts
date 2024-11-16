import { getDbConnection } from 'lib\db.ts';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const pool = await getDbConnection();
        const result = await pool.request().query('SELECT * FROM YourTable'); // Replace with your table
        res.status(200).json(result.recordset); // Return the query results
    } catch (error) {
        console.error('Database connection error:', error);
        res.status(500).json({ error: 'Database connection failed' });
    }
}
