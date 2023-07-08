const { MongoClient } = require("mongodb");
const mongoClient = new MongoClient("mongodb://127.0.0.1:27017");

const initDB = async ()=>{
  await mongoClient.connect();
  return mongoClient.db("user-service");
}

const getUserCollection = async ()=>{
  const db = await initDB();
  return db.collection("users");
}

module.exports = {
  getUserCollection
}
