import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", function(req, res){
    res.send("Hello World!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Sup!");
});
