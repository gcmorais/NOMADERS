const db = require('../../database');

class PlatformRepository {
  async findAll() {
    const rows = await db.query(`
      SELECT * FROM platforms
    `);

    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
      SELECT * FROM platforms
      WHERE id = $1
    `, [id]);

    return row;
  }

  async create({ name }) {
    const [row] = await db.query(`
      INSERT INTO platforms(name)
      VALUES($1)
      RETURNING *
    `, [name]);

    return row;
  }

  async update(id, { name }) {
    const [row] = await db.query(`
      UPDATE platforms
      SET name = $1
      WHERE id = $2
      RETURNING *
    `, [name, id]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
      DELETE FROM platforms
      WHERE id = $1
    `, [id]);

    return deleteOp;
  }
}

module.exports = new PlatformRepository();
