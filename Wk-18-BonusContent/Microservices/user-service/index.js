const express = require("express");
const app = express();

const usersController = require("./controller/User.js");
app.use("/api/users/", usersController);

app.listen(8000,()=>{
  console.log("App started..");
})
