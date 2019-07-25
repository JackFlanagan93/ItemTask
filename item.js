const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//defining schema
var itemSchema = new Schema({
    username: String,
    content: String

});

//defining model
var Item = mongoose.model("items", itemSchema);

module.exports = Item;