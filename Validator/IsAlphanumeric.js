const Validator = require('validator');

//Alphanumeric
const isAlphanumeric = (checkedItem) => {
    if (!Validator.isAlphanumeric(checkedItem, 'en-GB')) {
        console.log(`Checked Item is not alphanumeric: ${checkedItem}`)
        return false;
    } else {
        console.log(`Checked Item is alphanumeric: ${checkedItem}`)
        return true;
    }
}
module.exports = isAlphanumeric;