/**
 * Function that will create a shopping list div with the passed title and passed avlues in a unordered list.
 * @param {Array} values String arrays (that will be setted as the elements of the list).
 * @param {string} title Title of the header of the div.
 * @returns Returns a div with class shoppingList that contains an header and an unordered list.
 */
function CreateShoppingList(values,title){
    const div = document.createElement("div");
    div.classList.add("shoppingList");
    const header = document.createElement("h2");
    header.innerText = title;
    div.appendChild(header);
    div.appendChild(CreateUnorderedList(values));
    return div;
}

/**
 * Function that will create a new unordered list with the elements of the passed array.
 * @param {Array} values String arrays (that will be setted as the elements of the list).
 * @returns Returns an unordered list with the values appended as list items child.
 */
function CreateUnorderedList(values){
    const unorderedList = document.createElement("ul");
    let counter = 0;
    while(counter<values.length){
        unorderedList.appendChild(CreateListItem(values[counter]));
        counter++;
    }
    return unorderedList;
}

/**
 * Function that will create a new list item with the innerText equals to the value passed.
 * @param {string} value Value to put as the innerText of the list item.
 * @returns Returns a new lsit item.
 */
function CreateListItem(value){
    const listItem = document.createElement("li");
    listItem.innerText = value;
    return listItem;
}