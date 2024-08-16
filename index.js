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

const chickenBuillon = document.createElement('li')
chickenBuillon.textContent = "Chicken buillon"
parentIngList1.appendChild(chickenBuillon);

//---------------------------------------------------------

const parentIngList2 = document.getElementById('ing2');
// console.log(parentItems);

const childrenIng2 = parentIngList2.children;
// console.log(childrenIng);

console.log(childrenIng2[0]);
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