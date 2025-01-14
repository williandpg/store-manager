const connection = require('./connection');

const findAll = async () => {
  const [products] = await connection.execute('SELECT * from products');
  return products;
};

const findById = async (id) => {
  const [product] = await connection.execute('SELECT * from products WHERE id = ?', [id]);
  return product;
};

const register = async (name) => {
  const [productNew] = await connection.execute('INSERT INTO products (name) VALUES (?)', [name]);
  return { id: productNew.insertId, name };
};

const update = async (id, name) => {
  await connection.execute('UPDATE products SET name = ? WHERE id = ?', [name, id]);
  const [productUp] = await connection.execute('SELECT * from products WHERE id = ?', [id]);
  return productUp;
};

module.exports = {
  findAll,
  findById,
  register,
  update,
};