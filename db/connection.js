const { Pool } = require('pg');

const dbParams = {
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE
};

const db = new Pool(dbParams);

db.connect();

module.exports = db;