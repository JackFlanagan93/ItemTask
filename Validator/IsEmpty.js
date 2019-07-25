//Validator
const isEmpty = (checkedItem) =>
    checkedItem === undefined ||
    checkedItem === null ||
    checkedItem.length === 0 ||
    (typeof value === "object" && Object.keys(checkedItem).length === 0);
module.exports = isEmpty;
