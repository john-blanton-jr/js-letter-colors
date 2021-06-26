// Changes the color of every letter with mouseover then back to the original css color
// use the id of "sentence" on the tag you would like to change


//change for your colors 
const myColors = [
  "#A63C6D",
  "#3B82BF",
  "#3A8C46",
  "#D9B959",
  "#BF532C"
];

//change for different timing options on returning back to the original color
const returnDelay = "1s"
const returnDuration = "3s"






// Breaks up each individual letter into their on <span>
let words = document.querySelector("#sentence");
(function() {
  let splitWords = words.innerText.split("")
  let newHtml = '';
  for (var i = 0; i < splitWords.length; i++) { 
      newHtml += '<span>' + splitWords[i] + '</span>';
    }
    words.innerHTML = newHtml; 
})()


// eventListeners and transitions for letters 
let newWords = document.querySelectorAll("#sentence span");

Array.from(newWords).forEach(function(nw){
    nw.addEventListener('mouseover', function(e){
        const letter = e.target;
        letter.style.color = myColors[Math.floor(Math.random()*myColors.length)];
        letter.style.transitionDelay = "0s";
        letter.style.transitionDuration = "0s";
      });
      nw.addEventListener('mouseout', function(e){
        const letter = e.target;
        letter.style.color = "";
        letter.style.transitionDelay = returnDelay;
        letter.style.transitionDuration = returnDuration;
      });
    });
    
