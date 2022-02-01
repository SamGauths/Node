import fetch from "node-fetch";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", function(req, res){
  let queryParams = `{
  token_erc20 (where :{
      _and:[
        {contract_address:
          {_eq:"io1zl0el07pek4sly8dmscccnm0etd8xr8j02t4y7"}}
        {recipient:
          {_eq:"io1cz340sadrx0zumau3e9vms8ulcy3kuguljcevt"}}
        {timestamp:{_gt:"2022-01-9T00:00:00"}}
      ]
    }
    )
    {
      amount
    }
}`;
  
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Sup!");
});
