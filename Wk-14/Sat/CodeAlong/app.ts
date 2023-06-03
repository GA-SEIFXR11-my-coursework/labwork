import express from "express";
import liquid, { Liquid } from "liquidjs";
import mongodb, { MongoClient } from 'mongodb'

import 'dotenv/config'
import { promises } from "dns";

var engine = new Liquid({
    root: './views'
});

const port = 3000;
const app = express();
const clientRouter = express.Router();

const mongo = {
    client: {} as mongodb.MongoClient,
    db: {} as mongodb.Db,
    collections: {...{} as {[k: string]: mongodb.Collection<mongodb.BSON.Document>}}
}
try{
    mongo.client = new MongoClient(process.env["MONGO_URI"] as string);
}catch(e: unknown){
    console.log("Error: MONGO_URI missing or invalid.");
    if(typeof e == "string"){throw new Error(e as string)}
    else if(e instanceof Error){throw new Error(e.message)}
}
mongo.client.connect()
    .then(res =>{
        mongo.db = res.db("NewDB");
        mongo.collections = {
            users: mongo.db.collection("users"),
            animals: mongo.db.collection("animals"),
        }
        mongo.collections.users
            .find({})
            .toArray()
            .then(res=>{
                console.log(res)
            })
        ;
        mongo.collections.animals
            .find({})
            .toArray()
            .then(res=>{
                console.log(res)
            })
        ;
    })
;

app.engine('liquid', engine.express());
app.set('views', './views');
app.set('view engine', 'liquid');

clientRouter.use(express.static("public"));

clientRouter.get("/",function(req,res){
    res.render("index",{msg: "asdf!"});
});

app.use(clientRouter);
app.listen(port, function(){
    console.log("App started...");
})

