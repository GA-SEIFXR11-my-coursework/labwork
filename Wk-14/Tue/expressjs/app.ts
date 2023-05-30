import express from 'express';

// const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/template", (_req, _res) => {
    _res.render("index", { message: "hello world" });
});

// binds port to app (3000 is commonly used)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// used for parsing url encoded bodies in requests
app.use(express.urlencoded({ extended: true }));