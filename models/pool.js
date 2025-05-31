const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const ROLENAME = process.env.ROLENAME;
const ROLEPASSWORD = process.env.ROLEPASSWORD;

module.exports = new Pool({
  connectionString: `postgresql://${ROLENAME}:${ROLEPASSWORD}@localhost:5432/messages`,
});
