const express = require("express");
const { postgraphile } = require("postgraphile");
const pgoption = require("./config/pgconfig");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());

app.use(
  postgraphile(
    process.env.DATABASE_URL || "postgres://postgres:postgres@localhost:5432/postgres",
    "taskstory",
    pgoption
  )
);

app.listen(process.env.PORT || 13145, () => {
  console.log(`server start at http://localhost:${process.env.PORT}`);
});
