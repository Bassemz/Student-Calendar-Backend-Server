const pg = require("pg");
const Pool = pg.Pool;
const dotenv = require("dotenv");

var types = pg.types;
types.setTypeParser(1114, (stringValue) => {
  return stringValue;
});

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: "localhost",
  database: "studentcalendar",
  password: process.env.DB_PASSWORD,
  port: 5432,
});

module.exports = pool;
