const express = require("express");
const cors = require("cors");
const app = express();

app.get("/", cors(), function(req, res) {
    return res.send("Response from the express server: Simple 2 ec2 instances app; the first instance running a React frontend, the second running an Express backend.");
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});
