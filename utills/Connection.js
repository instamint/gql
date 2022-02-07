require("dotenv").config();

const knex = require("knex")({
  client: "pg",
  connection: {
    host: process.env.HOST_NAME,
    port: process.env.PORT,
    user: process.env.USERNAMEE,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = knex;
