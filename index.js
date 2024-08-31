const header1 = document.getElementById("header")
header1.style.backgroundColor="blue"
// console.log(header)

let recList = document.querySelector('#recipeList');
recList.style.backgroundColor="purple";
recList.style.width="80vw";
recList.style.margin="0";
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



document.getElementById("smallerWindow").addEventListener("click", function() {   //not sure why this is not working
    window.open("https://www.facebook.com/", "facebookWindow", "width=800,height=600");
});
//the goal to to link to a nonexistant facebook page for pictures of the recipe

//----------------------------------------------------------------------

function validate(){
    let email=document.getElementById("text").value;
    let regx= /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(regx.text(mail)){
        alert("valid email")
        return true
    }
    else{
        alert("Invalid email")
        return false;
    }
}

//---------------------------------- Code for 308.A SBA
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')  //I don't understand why this data doesn't require an API key
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  const apiUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const contactForm = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-message');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(contactForm);

  const requestOptions = {
    method: 'POST',
    body: formData,
  };

  fetch("index.JSON")   //I have no idea how to sore the data in a JSON file or where to store it to
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      responseMessage.textContent = data;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
//------------------------------------------------------------------------------
