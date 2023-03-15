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

const unorderedList = document.createElement("ul");
for(let i=0; i<shoppingList.length; i++)
    unorderedList.appendChild(CreateListItem(shoppingList[i]));
document.body.appendChild(unorderedList);


function CreateListItem(value){
    const listItem = document.createElement("li");
    listItem.innerText = value;
    return listItem;
}