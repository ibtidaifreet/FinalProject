let listOfThings = [];

let fruitSeven = document.getElementById('fruit-seven');
let fruitEight = document.getElementById('fruit-eight');
let fruitNine = document.getElementById('fruit-nine');

let drinksSeven = document.getElementById('drinks-seven');
let drinksEight = document.getElementById('drinks-eight');
let drinksNine = document.getElementById('drinks-nine');


let itGirl = document.getElementById('it-girl');
let shitGirl = document.getElementById('shit-girl');
let bitchGirl = document.getElementById('bitch-girl');


const happyText = document.getElementById('happy-text')
const itContent = document.createTextNode("Ohhh hellooo! Now this is amazing!!"); //change this variable for different text
const shitContent = document.createTextNode("Okay! This is all cool.");
const bitchContent = document.createTextNode("Ew no. What even is that?");
let buttonDisable = document.getElementById('reset-button');

itGirl.style.display = "none";
shitGirl.style.display = "none";
bitchGirl.style.display = "none";

buttonDisable.style.display = "none";


fruitSeven.addEventListener("click", function(){
  addToList("star", "fruit");
});
fruitEight.addEventListener("click", function(){
  addToList("lemon", "fruit");

});
fruitNine.addEventListener("click", function(){
  addToList("pear", "fruit");

});

drinksSeven.addEventListener("click", function(){
    addToList("rum", "rum");
});
drinksEight.addEventListener("click", function(){
    addToList("champain", "champain");
});
drinksNine.addEventListener("click", function(){
    addToList("lickor", "lickor");
});

buttonDisable.addEventListener("click", function(){
  listOfThings = [];
  happyText.innerText = "";
  itGirl.style.display = "none";
  shitGirl.style.display = "none";
  bitchGirl.style.display = "none";

  buttonDisable.style.display = "none";
});
function addToList(item, type){
  for (let i = 0; i < listOfThings.length; i++) {
    if(listOfThings[i] === item){
      return;
    }
    if(listOfThings[i] === "star" && type === "rum"){ //
      itGirl.style.display = "block";
      buttonDisable.style.display = "block";

      happyText.appendChild(itContent);


    }
    if(listOfThings[i] === "lemon" && type === "champain"){ //
      bitchGirl.style.display = "block";
      buttonDisable.style.display = "block";

      happyText.appendChild(bitchContent);


    }
    if(listOfThings[i] === "pear" && type === "lickor"){ //
      shitGirl.style.display = "block";
      buttonDisable.style.display = "block";

      happyText.appendChild(shitContent);
  }
  if(listOfThings[i] === "star" && type === "champain"){ //
    itGirl.style.display = "block";
    buttonDisable.style.display = "block";

    happyText.appendChild(itContent);


  }
  if(listOfThings[i] === "star" && type === "lickor"){ //
    shitGirl.style.display = "block";
    buttonDisable.style.display = "block";

    happyText.appendChild(shitContent);
  }
  if(listOfThings[i] === "lemon" && type === "rum"){ //
    itGirl.style.display = "block";
    buttonDisable.style.display = "block";

    happyText.appendChild(itContent);


  }

  if(listOfThings[i] === "lemon" && type === "lickor"){ //
    shitGirl.style.display = "block";
    buttonDisable.style.display = "block";

    happyText.appendChild(bitchContent);


  }
  if(listOfThings[i] === "pear" && type === "rum"){ //
    bitchGirl.style.display = "block";
    buttonDisable.style.display = "block";

    happyText.appendChild(itContent);
  }
  if(listOfThings[i] === "pear" && type === "champain"){ //
    bitchGirl.style.display = "block";
    buttonDisable.style.display = "block";

    happyText.appendChild(bitchContent);
  }
}
  listOfThings.push(item);
  console.log(listOfThings);
}
