const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const DATABASE_HOST = process.env.DATABASE_HOST;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_NAME = process.env.DATABASE_NAME;

module.exports = new Pool({
  connectionString: `postgresql://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}/${DATABASE_NAME}`,
  ssl: {
    rejectUnauthorized: false,
  },
});
