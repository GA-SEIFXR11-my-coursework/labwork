const express = require("express");
const jwt = require("jsonwebtoken");
const { getUserCollection } = require("../db.js");

const users = express.Router();
users.use(express.json());
const secretKey = "SecretKey";
const expireTime = 5 * 60;

let usersCollection;
getUserCollection()
  .then((collection)=>{
    usersCollection = collection;
  })
  .catch((e)=>{console.error(e)})

users.post('/login', async (req,res)=>{
  const userDetails = req.body;
  if(userDetails.username && userDetails.password){
    // Create token
    const token = jwt.sign(userDetails, secretKey, {algorithm: "HS512", expiresIn: expireTime});
    res.json({token: token});
  }else{
    res
      .status(401)
      .json({error: "You are not authorized to use this resource."});
  }
});

users.post('/register', async (req,res)=>{
  const userDetails = req.body;
  console.log(userDetails);
  const response = await usersCollection.insertOne(userDetails);
  res.json({message: response});
})

users.get("/verifyToken", (req,res)=>{
  const token = req.query.token;
  if(token){
    try{
      const payload = jwt.verify(token, secretKey);
      res.json({payload: payload});
    }catch(e){
      res.status(400).json({error: e});
    }
  }else{
    res
      .status(400)
      .json({error: "Missing token..."})
    ;
  }
})

module.exports = users;
