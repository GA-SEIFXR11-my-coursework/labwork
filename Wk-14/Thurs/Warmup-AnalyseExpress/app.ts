import express from 'express';

// const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "pug");

function analysePhrase(phrase: string){
    var words: string[] = phrase.split(" ")
    var uniqueWords = Array.from(new Set(words))
    var jsonResponse = {
        "analysis":{
            "letterCount": phrase.length,
            "wordCount": words.length,
            "startingWord": words[0],
            "endingWord": words[words.length - 1],
            "uniqueWords": uniqueWords,
            "uniqueWordCount": uniqueWords.length, 
        }
    }
    return jsonResponse
}


app.get("/analyse/:phrase", (_req, _res) => {
    var jsonResponse = analysePhrase(_req.params["phrase"])
    _res.json(jsonResponse)
});

// binds port to app (3000 is commonly used)
app.listen(port, () => {
    console.log(`app started...`);
});

// used for parsing url encoded bodies in requests
app.use(express.urlencoded({ extended: true }));