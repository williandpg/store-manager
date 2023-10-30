const camelize = require('camelize');
const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute(`
  SELECT 
  sp.sale_id,
  s.date,
  sp.product_id,
  sp.quantity 
  FROM sales_products AS sp
  INNER JOIN sales as s ON sp.sale_id = s.id
  ORDER BY sp.sale_id, sp.product_id`);
  return camelize(sales);
};

const findById = async (id) => {
  const [[sale]] = await connection.execute(`
  SELECT 
  s.date,
  sp.product_id,
  sp.quantity
  FROM sales_products AS sp
  INNER JOIN sales as s ON sp.sale_id = s.id
  WHERE sp.sale_id = ?`, [id]);
  return camelize(sale);
};

module.exports = {
  getAll,
  findById,
};