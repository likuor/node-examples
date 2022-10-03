const { Pool } = require("pg");
const fs = require("fs");

const queryDb = async (filepath) => {
  const pool = new Pool({
    user: "arthurdilascio",
    host: "localhost",
    database: "week_assignment",
    password: "",
    port: 5432,
  });
  const queryFile = fs.readFileSync(filepath, "utf8");
  const res = await pool.query(queryFile);
  pool.end();
  return res;
};

module.exports = { queryDb };
