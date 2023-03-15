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

const shoppingList1 = ["Melanzane","Zucchine","Peperoni"];
const shoppingList2 = ["Pere","Banane","Fragole","Kiwi","Mele"];
const shoppingList3 = ["Spaghetti","Penne","Fusilli","Conchigliette"];

const listContainer = document.getElementById("listContainer");

listContainer.appendChild(CreateShoppingList(shoppingList1,"Verdura"));
listContainer.appendChild(CreateShoppingList(shoppingList2,"Frutta"));
listContainer.appendChild(CreateShoppingList(shoppingList3,"Pasta"));