const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  host: "localhost",
  port: 5432,
  user: "root",
  password: "root",
  database: "nomaders",
});

pool.connect((err) => {
  if (err) throw err;
  console.log("Connect to PosgreSQL successfully!");
});

exports.query = async (query, values) => {
  const { rows } = await pool.query(query, values);
  return rows;
};
