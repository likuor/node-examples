const { Pool } = require("pg");
const fs = require("fs");

const queryDb = async (filepath) => {
  const pool = new Pool({
    user: "postgres",
    host: "database-2.czyfev8kcq28.us-east-1.rds.amazonaws.com",
    database: "schooldb",
    password: "postgres123!",
    port: 5432,
  });
  const queryFile = fs.readFileSync(filepath, "utf8");
  const res = await pool.query(queryFile);
  pool.end();
  return res;
};

module.exports = { queryDb };
