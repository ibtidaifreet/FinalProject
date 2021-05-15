let listOfThings = [];

let fruitFour = document.getElementById('fruit-four');
let fruitFive = document.getElementById('fruit-five');
let fruitSix = document.getElementById('fruit-six');

let drinksFour = document.getElementById('drinks-four');
let drinksFive = document.getElementById('drinks-five');
let drinksSix = document.getElementById('drinks-six');


let reallyGirl = document.getElementById('really-girl');
let verryGirl = document.getElementById('verry-girl');
let wowGirl = document.getElementById('wow-girl');


const happyText = document.getElementById('happy-text')
const reallyContent = document.createTextNode("Ohhh hellooo! Now this is amazing!!"); //change this variable for different text
const verryContent = document.createTextNode("Okay! This is all cool.");
const wowContent = document.createTextNode("Ew no. What even is that?");
let buttonDisable = document.getElementById('reset-button');

reallyGirl.style.display = "none";
verryGirl.style.display = "none";
wowGirl.style.display = "none";

buttonDisable.style.display = "none";


fruitFour.addEventListener("click", function(){
  addToList("purple", "fruit");
});
fruitFive.addEventListener("click", function(){
  addToList("kiwi", "fruit");

});
fruitSix.addEventListener("click", function(){
  addToList("mango", "fruit");

});

drinksFour.addEventListener("click", function(){
    addToList("abs", "abs");
});
drinksFive.addEventListener("click", function(){
    addToList("vod", "vod");
});
drinksSix.addEventListener("click", function(){
    addToList("bran", "bran");
});

buttonDisable.addEventListener("click", function(){
  listOfThings = [];
  happyText.innerText = "";
  reallyGirl.style.display = "none";
  verryGirl.style.display = "none";
  wowGirl.style.display = "none";

  buttonDisable.style.display = "none";
});
function addToList(item, type){
  for (let i = 0; i < listOfThings.length; i++) {
    if(listOfThings[i] === item){
      return;
    }
    if(listOfThings[i] === "purple" && type === "abs"){ //
      reallyGirl.style.display = "block";
      buttonDisable.style.display = "block";

      happyText.appendChild(reallyContent);


    }
    if(listOfThings[i] === "kiwi" && type === "vod"){ //
      verryGirl.style.display = "block";
      buttonDisable.style.display = "block";

      happyText.appendChild(verryContent);


    }
    if(listOfThings[i] === "mango" && type === "bran"){ //
      wowGirl.style.display = "block";
      buttonDisable.style.display = "block";

      happyText.appendChild(verryContent);
  }
  if(listOfThings[i] === "purple" && type === "vod"){ //
    wowGirl.style.display = "block";
    buttonDisable.style.display = "block";

    happyText.appendChild(verryContent);


  }
  if(listOfThings[i] === "purple" && type === "bran"){ //
    wowGirl.style.display = "block";
    buttonDisable.style.display = "block";

    happyText.appendChild(wowContent);
  }
  if(listOfThings[i] === "kiwi" && type === "abs"){ //
    reallyGirl.style.display = "block";
    buttonDisable.style.display = "block";

    happyText.appendChild(wowContent);


  }

  if(listOfThings[i] === "kiwi" && type === "bran"){ //
    reallyGirl.style.display = "block";
    buttonDisable.style.display = "block";

    happyText.appendChild(wowContent);


  }
  if(listOfThings[i] === "mango" && type === "vod"){ //
    wowGirl.style.display = "block";
    buttonDisable.style.display = "block";

    happyText.appendChild(reallyContent);
  }
  if(listOfThings[i] === "mango" && type === "abs"){ //
    wowGirl.style.display = "block";
    buttonDisable.style.display = "block";

    happyText.appendChild(wowContent);
  }
}
  listOfThings.push(item);
  console.log(listOfThings);
}
