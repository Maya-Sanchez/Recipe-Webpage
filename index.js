const header1 = document.getElementById("header")
header1.style.backgroundColor="blue"
// console.log(header)

let recList = document.querySelector('#recipeList');
recList.style.backgroundColor="purple";
// console.log(recList)

//-----------------------------------------------------------------
const parentIngList1 = document.getElementById('ing2');
// console.log(parentItems);

const childrenIng1 = parentIngList1.children;
// console.log(childrenIng);

// console.log(childrenIng1[0]);

for (let i = 0; i < childrenIng1.length; i++){
    console.log(childrenIng1[i]);
}

const recipeAddition1 = document.createElement('li')
recipeAddition1.textContent = "Chicken bouillon"
parentIngList1.appendChild(recipeAddition1);

//---------------------------------------------------------

const parentIngList2 = document.getElementById('ing2');
// console.log(parentItems);

const childrenIng2 = parentIngList2.children;
// console.log(childrenIng);

console.log(childrenIng2[0]);

for (let i = 0; i < childrenIng2.length; i++){
    console.log(childrenIng2[i]);
}

const recipeAddition2 = document.createElement('li')
recipeAddition2.textContent = "Chicken bouillon"
parentIngList2.appendChild(recipeAddition2);

//---------------------------------------------------------

const parentIngList3 = document.getElementById('ing2');
// console.log(parentItems);

const childrenIng3 = parentIngList3.children;
// console.log(childrenIng);

console.log(childrenIng3[0])

//---------------------------------------------------------
const parentIngList4 = document.getElementById('ing2');
// console.log(parentItems);

const childrenIng4 = parentIngList4.children;
// console.log(childrenIng);

console.log(childrenIng4[0])

//----------------------------------------------------------

document.getElementById('saveRec').addEventListener('click', function() {
    const button = this;
    const savedRec = document.getElementById('saved');
    const recipeTotals = parseInt(savedRec.getAttribute('data-totalitems')) + 1; // Increment total items

    // Add 'recentSaves' class to the button
    button.querySelector('span').classList.add('recentSaves');

    // Remove 'recentSaves' class after 1 second and update data attribute
    setTimeout(() => {
        button.querySelector('span').classList.remove('recentSaves');
        savedRec.setAttribute('data-totalitems', recipeTotals);
    }, 1000);

    // Add 'shake' class to cart icon and remove it after 0.5 seconds
    const cartIcon = savedRec.querySelector('i'); // Assuming you want to shake the cart icon
    if (cartIcon) {
        cartIcon.classList.add('shake');
        setTimeout(() => cartIcon.classList.remove('shake'), 500);
    }
});
