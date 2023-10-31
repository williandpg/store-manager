const connection = require('./connection');

const findAll = async () => {
  const [sales] = await connection.execute(
    `SELECT 
      sales_products.sale_id AS saleId,
      sales_products.product_id AS productId,
      sales_products.quantity,
      sales.date
    FROM sales_products 
    JOIN sales ON sales_products.sale_id = sales.id;`,
  );
  return sales;
};

const findById = async (id) => {
  const [sale] = await connection.execute(`
    SELECT
      sales_products.product_id AS productId, 
      sales_products.quantity, sales.date
    FROM sales_products 
    JOIN sales ON sales_products.sale_id = sales.id
    WHERE sales.id = ?`, [id]);
  return sale;
};

const register = async (products) => {
  const [sale] = await connection.execute(
    'INSERT INTO sales (date) VALUES (NOW())',
  );
  const { insertId: id } = sale;
  const promises = products.map((product) =>
    connection.execute(
      'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [id, product.productId, product.quantity],
    ));
  await Promise.all(promises);
  return { id: sale.insertId, itemsSold: products };
};

module.exports = {
  findAll,
  findById,
  register,
};