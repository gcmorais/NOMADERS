const db = require('../../database');

class ProductRepository {
  async findAll() {
    // TO_CHAR(dateValue, 'DD-MM-YYYY') AS dateValue
    const rows = await db.query(`
      SELECT *
      FROM products
    `);
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
    name, ean, cost, salePrice, dateValue,
  }) {
    const [row] = await db.query(`
      INSERT INTO products(name, ean, cost, salePrice, dateValue)
      VALUES($1, $2, $3, $4, to_date($5, 'DD-MM-YYYY'))
      RETURNING *
    `, [name, ean, cost, salePrice, dateValue]);

    return row;
  }

  async update(id, {
    name, ean, cost, salePrice, dateValue,
  }) {
    const [row] = await db.query(`
      UPDATE products
      SET name = $1, ean = $2, cost = $3, salePrice = $4, dateValue = to_date($5, 'DD-MM-YYYY')
      WHERE id = $6
      RETURNING *
    `, [name, ean, cost, salePrice, dateValue, id]);

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
