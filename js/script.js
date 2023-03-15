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

document.body.appendChild(CreateList(shoppingList));


function CreateList(values){
    const unorderedList = document.createElement("ul");
    for(let i=0; i<values.length; i++)
        unorderedList.appendChild(CreateListItem(values[i]));
    return unorderedList;
}

function CreateListItem(value){
    const listItem = document.createElement("li");
    listItem.innerText = value;
    return listItem;
}