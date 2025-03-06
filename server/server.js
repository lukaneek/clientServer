const express = require("express");
const cors = require("cors");
const app = express();

app.get("/", cors(), function(req, res) {
    return res.send("Hello World luka");
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
});