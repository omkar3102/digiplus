const express = require("express");
const bodyParser = require("body-parser");

const app = express()
app.use(express.static('public'))



app.listen(3000, function(req,res){
    console.log("Server is listening on port 3000")
})

