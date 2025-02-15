

function printColours(colours) {
    if (!colours) throw new Error("colour is required");
    return [...colours];
}

function shoppingList(list, newItem) {
    if (!list) throw new Error("list is required");
    if (!newItem) throw new Error("newItem is required");
    list.push(...newItem);
    return list;
}

function highestNumber(numbers) {
    if (!numbers) throw new Error("numbers are required");
    return Math.max(...numbers);
}

function splitThatString(string) {
    if (!string) throw new Error("string is required");
    return [...string];
}


function addressLookUp(user) {
    if (!user) throw new Error("user is required");
    return user.address?.postcode;
}


module.exports = {
    printColours,
    shoppingList,
    highestNumber,
    splitThatString,
    addressLookUp
};
