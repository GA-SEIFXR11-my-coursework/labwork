const express = require("express");
const app = express();

const {checkTokenInHeader} = require("./Middleware.js");
app.use(checkTokenInHeader);

const todosController = require("./controller/Todo.js");
app.use("/api/todos", todosController);

app.listen(8800,()=>{
  console.log("App started..");
})
