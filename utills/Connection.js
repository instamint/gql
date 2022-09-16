require("dotenv").config();

const knex = require("knex")({
  client: "pg",
  connection: {
    host: process.env.HOSTNAME,
    port: process.env.PORT,
    user: process.env.USERNAMEE,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    ssl:false
    // ssl: {
    //   rejectUnauthorized: true,
    // },
  },
});

module.exports = knex;
