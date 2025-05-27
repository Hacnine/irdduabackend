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



export const getSubcategoriesByCategoryId = (req, res) => {
  const { categoryid } = req.query; // expecting ?categoryid=1 from frontend

  if (!categoryid) {
    return res.status(400).json({ error: "Missing 'categoryid' query parameter" });
  }

  const sql = `SELECT * FROM subcategories WHERE cat_id = ?`;
  db.all(sql, [categoryid], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(rows);
  });
};

export const getDuasByCategory = (req, res) => {
  const { cat_id } = req.query;

  if (!cat_id) {
    return res.status(400).json({ error: "cat_id is required" });
  }

  const sql = `SELECT * FROM dua WHERE cat_id = ?`;

  db.all(sql, [cat_id], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(rows);
  });
};
