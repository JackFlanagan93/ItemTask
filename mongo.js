const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();

const HTTPItems = require("./routes/HTTPItems.js");

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use("/HTTPItems", HTTPItems)

const port = process.env.PORT || 5000;
let uri = 'mongodb://localhost:27018/example'
let opts = {useNewUrlParser: true}

app.listen(port, () => console.log(`This server is running on port ${port}`));

//defining connection to db
mongoose.connect(uri, opts).then(
    () => { console.log(`MongoDB Is Connecteed to ${uri}`) },
    (err) => { console.log("Connection Failed") }

);



