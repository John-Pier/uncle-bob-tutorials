const express = require("express");
const pbService = require("./services/pg-connection.service");
const app = express();

const PORT = 3001;

app.use(express.static(__dirname + "public/*"));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.use("/", express.static(__dirname + "/public"));

app.post('/comment', (req, res) => {
    console.log(req.url, req.body);
    req.body && pbService.addToDB(JSON.parse(req.body));
    res.status(200).send('Server Works');
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)
})
