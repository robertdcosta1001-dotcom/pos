const pool = require('../db');

const getAllItems = async () => {
  const res = await pool.query('SELECT * FROM items');
  return res.rows;
};

const addItem = async (name, price) => {
  const res = await pool.query(
    'INSERT INTO items (name, price) VALUES ($1, $2) RETURNING *',
    [name, price]
  );
  return res.rows[0];
};

module.exports = { getAllItems, addItem };