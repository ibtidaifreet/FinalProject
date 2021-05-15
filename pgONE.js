let listOfThings = [];

let fruitOne = document.getElementById('fruit-one');
let fruitTwo = document.getElementById('fruit-two');
let fruitThree = document.getElementById('fruit-three');

let drinksOne = document.getElementById('drinks-one');
let drinksTwo = document.getElementById('drinks-two');
let drinksThree = document.getElementById('drinks-three');


let happyGirl = document.getElementById('happy-girl');
let regularGirl = document.getElementById('regular-girl');
let contemplatingGirl = document.getElementById('contemplating-girl');


const happyText = document.getElementById('happy-text')
const happyContent = document.createTextNode("Ohhh hellooo! Now this is amazing!!"); //change this variable for different text
const regularContent = document.createTextNode("Okay! This is all cool.");
const contemplatingContent = document.createTextNode("Ew no. What even is that?");
let buttonDisable = document.getElementById('reset-button');

happyGirl.style.display = "none";
regularGirl.style.display = "none";
contemplatingGirl.style.display = "none";

buttonDisable.style.display = "none";


fruitOne.addEventListener("click", function(){
  addToList("coconut", "fruit");
});
fruitTwo.addEventListener("click", function(){
  addToList("pommy", "fruit");

});
fruitThree.addEventListener("click", function(){
  addToList("orange", "fruit");

});

drinksOne.addEventListener("click", function(){
    addToList("henny", "henny");
});
drinksTwo.addEventListener("click", function(){
    addToList("beer", "beer");
});
drinksThree.addEventListener("click", function(){
    addToList("gin", "gin");
});

buttonDisable.addEventListener("click", function(){
  listOfThings = [];
  happyText.innerText = "";
  happyGirl.style.display = "none";
  regularGirl.style.display = "none";
  contemplatingGirl.style.display = "none";

  buttonDisable.style.display = "none";
});
function addToList(item, type){
  for (let i = 0; i < listOfThings.length; i++) {
    if(listOfThings[i] === item){
      return;
    }
    if(listOfThings[i] === "coconut" && type === "henny"){ //
      happyGirl.style.display = "block";
      buttonDisable.style.display = "block";

      happyText.appendChild(happyContent);


    }
    if(listOfThings[i] === "pommy" && type === "beer"){ //
      regularGirl.style.display = "block";
      buttonDisable.style.display = "block";

      happyText.appendChild(regularContent);


    }
    if(listOfThings[i] === "orange" && type === "gin"){ //
      contemplatingGirl.style.display = "block";
      buttonDisable.style.display = "block";

      happyText.appendChild(regularContent);
  }
  if(listOfThings[i] === "coconut" && type === "beer"){ //
    contemplatingGirl.style.display = "block";
    buttonDisable.style.display = "block";

    happyText.appendChild(regularContent);


  }
  if(listOfThings[i] === "coconut" && type === "gin"){ //
    contemplatingGirl.style.display = "block";
    buttonDisable.style.display = "block";

    happyText.appendChild(contemplatingContent);
  }
  if(listOfThings[i] === "pommy" && type === "henny"){ //
    regularGirl.style.display = "block";
    buttonDisable.style.display = "block";

    happyText.appendChild(contemplatingContent);


  }

  if(listOfThings[i] === "pommy" && type === "gin"){ //
    regularGirl.style.display = "block";
    buttonDisable.style.display = "block";

    happyText.appendChild(contemplatingContent);


  }
  if(listOfThings[i] === "orange" && type === "henny"){ //
    contemplatingGirl.style.display = "block";
    buttonDisable.style.display = "block";

    happyText.appendChild(regularContent);
  }
  if(listOfThings[i] === "orange" && type === "beer"){ //
    contemplatingGirl.style.display = "block";
    buttonDisable.style.display = "block";

    happyText.appendChild(regularContent);
  }
}
  listOfThings.push(item);
  console.log(listOfThings);
}
