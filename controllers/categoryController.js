import db from '../models/database.js';

export const getAllDatas = (tableName) => (req, res) => {
  const sql = `SELECT * FROM ${tableName}`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    // console.log(`Data from ${tableName}:`, rows); // Log the data to the console

    res.json(rows);
  });
};