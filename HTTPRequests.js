// Get all items
GET http://localhost:5000/HTTPItems/getAll

###

// Add item to DB
POST http://localhost:5000/HTTPItems/addItem
content-type: application/json

{
    "username": "sample",
    "email": "sample.email@email.com",
    "content": "Wed, 21 Oct 2015 18:27:50 GMT"
}

###

// Add item to DB
POST http://localhost:5000/HTTPItems/addItem1
content-type: application/json

{
    "username": "sample",
    "email": "sample.email@email.com",
    "content": "Wed, 21 Oct 2015 18:27:50 GMT"
}

###

// Update item in DB
PUT http://localhost:5000/HTTPItems/updateItem
content-type: application/json

{
    "username": "1",
    "email": "sample.email@email.com",
    "content": "This is the udpated text"
}

###

// Delete item 
DELETE http://localhost:5000/HTTPItems/deleteItem
content-type: application/json

{
    "username": "Jack"
}