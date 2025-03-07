const express = require("express");
const cors = require("cors");
const app = express();

app.get("/", cors(), function(req, res) {
    return res.send("Simple 2 ec2 instance react frontend with an express backend.");
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
});