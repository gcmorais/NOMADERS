const db = require('../../database');

class ProductRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM products');
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
      SELECT * FROM products
      WHERE id = $1
    `, [id]);
    return row;
  }

  async findByEan(ean) {
    const [row] = await db.query(`
      SELECT * FROM products
      WHERE ean = $1
    `, [ean]);
    return row;
  }

  async create({
    name, ean, cost, salePrice,
  }) {
    const [row] = await db.query(`
      INSERT INTO products(name, ean, cost, salePrice)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, ean, cost, salePrice]);

    return row;
  }

  async update(id, {
    name, ean, cost, salePrice,
  }) {
    const [row] = await db.query(`
      UPDATE products
      SET name = $1, ean = $2, cost = $3, salePrice = $4
      WHERE id = $5
      RETURNING *
    `, [name, ean, cost, salePrice, id]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
      DELETE FROM products
      WHERE id = $1
    `, [id]);
    return deleteOp;
  }
}

module.exports = new ProductRepository();
