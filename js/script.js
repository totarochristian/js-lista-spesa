/*
---------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------   Main Goal   ------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
Let's review the exercise seen together, but this time with the while loop instead of the for loop. Let's be careful not 
to forget all the implementation differences that the while loop imposes on us, in particular to the index variable.
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------   Tips   --------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
How can I loop through an array with while loop?
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
*/

const shoppingList = ["Melanzane","Zucchine","Pere","Spaghetti Barilla","Penne Barilla","Tonno","Aglio","Cipolle"];

document.body.appendChild(CreateUnorderedList(shoppingList));

/**
 * Function that will create a new unordered list with the elements of the passed array.
 * @param {Array} values String arrays (that will be setted as the elements of the list).
 * @returns Returns an unordered list with the values appended as list items child.
 */
function CreateUnorderedList(values){
    const unorderedList = document.createElement("ul");
    let counter = 0;
    while(counter<values.length){
        unorderedList.appendChild(CreateListItem(values[i]));
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