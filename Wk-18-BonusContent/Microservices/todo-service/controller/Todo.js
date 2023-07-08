const express = require("express");
const { getTodosCollection } = require("../db.js");

const todos = express.Router();
todos.use(express.json());

let todosCollection;
getTodosCollection()
  .then((collection)=>{
    todosCollection = collection;
  })
  .catch((e)=>{console.error(e)})
;

todos.get("/all", async (req,res)=>{
  const todoList = await todosCollection.find().toArray();
  res.json({payload: todoList});
});

todos.post('/', async (req,res)=>{
  const inputData = req.body;
  if(inputData){
    const resp = await todosCollection.insertOne(inputData);
    res.json({payload: resp});
  }else{
    res
      .status(400)
      .json({error: "No data provided..."})
    ;
  }
});

module.exports = todos;
