const express = require("express");
const { postgraphile } = require("postgraphile");
const pgoption = require('./config/pgconfig')
const app = express();
require('dotenv').config()

app.use(
    postgraphile(
        process.env.DATABASE_URL || "postgres://user:user@localhostt:5432/user", "taskstory", pgoption
    )
);

app.listen(process.env.PORT || 3000, () => {
    console.log(`server start at http://localhost:${process.env.PORT}`)
});