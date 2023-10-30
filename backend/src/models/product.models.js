const camelize = require('camelize');
const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM products ORDER BY id');
  return camelize(products);
};

const findById = async (id) => {
  const [[product]] = await connection.execute('SELECT * FROM products WHERE id = ?', [id]);
  return camelize(product);
};

const register = async (name) => {
  const [products] = await connection.execute('INSERT INTO products (name) VALUES (?)', [name]);
  return camelize({ id: products.insertId, name });
};

module.exports = {
  getAll,
  findById,
  register,
};