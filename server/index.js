const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const http = require("http");

const PORT = 3001;

app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.get('/', (req, res) => {
    res.status(200).send('Server Works');
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
})
