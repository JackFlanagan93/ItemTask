const express = require('express');
let item = require("../item.js");
const router = express.Router();
const isAlphanumeric = require("../Validator/IsAlphanumeric")
const isEmpty = require("../Validator/IsEmpty")

//@route GET HTTPItems/getAll
//@desc Get All Items
//@access Public
router.get("/getAll", (req, res) => {
    //used to manually store errors
    const errors = {};
    item.find()
        .then(items => {
            if (!items) {
                errors.noitems = "There are no items";
                res.status(404).json(errors);
            }
            res.json(items);
        })
        .catch(err => res.status(404).json({
            noitems: `There are no items: ${err}`
        }));
})

//@route POST HTTPItems/addItem
//@desc Add One Item
//@access Public
router.post("/addItem", (req, res) => {
    //used to manually store errors
    let checkUsername = req.body.username;
    if (isAlphanumeric(checkUsername) && !isEmpty(checkUsername)){

    let addItem = new item({

        username: req.body.username,
        content: req.body.content
    })
    addItem.save()
        .then(() => res.status(200).send("Item Added To The DB!"))
        .then(() => console.log(`Item Added To The DB ${addItem}`))
    } else {
        res.status(555).send("Validation Failed, Please Try Again") 
        console.log("Validation Failed, Please Try Again")
    }
})

//@route PUT HTTPItems/updateItem
//@desc update an item
//@access Public
router.put("/updateItem", (req, res) => {
    //used to manually store errors
    item.updateOne({
            "username": req.body.username
        }, {
            $set: {
                "content": req.body.content
            }
        })
        .then(() => res.status(200).send("Item Updated!"))
        .then(() => console.log(`Item Updated`))

});

//@route DELETE HTTPItems/deleteItem
//@desc delete an item
//@access Public
router.delete("/deleteItem", (req, res) => {
    //used to manually store errors
    item.deleteOne({
            "username": req.body.username
        }, )
        .then(() => res.status(200).send("Item Deleted!"))
        .then(() => console.log(`Item Deleted`))

});


module.exports = router;