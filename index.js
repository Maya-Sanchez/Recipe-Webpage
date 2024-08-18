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

document.getElementById("openButton1").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "flex";
})

document.querySelector('.close').addEventListener("click",function(){
    document.querySelector('.popup').style.display = "none";
})

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


document.getElementById("openButton2").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "flex";
})

document.querySelector('.close').addEventListener("click",function(){
    document.querySelector('.popup').style.display = "none";
})


//---------------------------------------------------------

const parentIngList3 = document.getElementById('ing2');
// console.log(parentItems);

const childrenIng3 = parentIngList3.children;
// console.log(childrenIng);

console.log(childrenIng3[0])


document.getElementById("openButton3").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "flex";
})

document.querySelector('.close').addEventListener("click",function(){
    document.querySelector('.popup').style.display = "none";
})


//---------------------------------------------------------
const parentIngList4 = document.getElementById('ing2');
// console.log(parentItems);

const childrenIng4 = parentIngList4.children;
// console.log(childrenIng);

console.log(childrenIng4[0])


document.getElementById("openButton4").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "flex";
})

document.querySelector('.close').addEventListener("click",function(){
    document.querySelector('.popup').style.display = "none";
})


//----------------------------------------------------------

