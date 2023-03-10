let userInputOne = document.querySelector(".userInput-one");
let userInputOneOne = document.getElementById("userInput-one");
let answerButton = document.querySelector(".answerButton");
let counter = document.querySelector(".counter");
let numCounter = 0;
let cycle = 1;
let userInputTwo = document.querySelector(".userInput-two");
let userInputTwoTwo = document.getElementById("userInput-two");
let checkChanged = "";
let checkChangedTwo = "";
let result = document.querySelector(".result");

const listCursors = ["move","n-resize","ne-resize","e-resize", "se-resize", "s-resize", "sw-resize", "w-resize", "nw-resize", "progress", "help", "crosshair", "no-drop", "none", "wait", "zoom-in", "zoom-out", "vertical-text", "pointer", "not-allowed", "copy", "context-menu", "cell", "alias"];
function random(min,max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

let repeat = setInterval(function() {
    document.body.style.cursor=listCursors[random(0,listCursors.length-1)];
}, 200);

function lazy(userInputOneValue, userInputTwoValue) {
    console.log(userInputOneValue, checkChanged, userInputTwoValue, checkChangedTwo);
    if (checkChanged !== userInputOneValue || checkChangedTwo !== userInputTwoValue) {
        numCounter += 1;
        counter.innerHTML = "Number of times completed: " + numCounter;
        checkChanged = userInputOneValue;
        checkChangedTwo = userInputTwoValue;
    }
}

function answer (){
                let userInputOneValue = userInputOne.value;
            let userInputTwoValue = userInputTwo.value;
            if (Number(userInputOneValue) <= 1) {
                if (Number(userInputOneValue) <0) {
                    result.innerHTML = "How do you work less than 0 hours a day?";
                } else if (userInputTwoValue.toLowerCase() === "no") {
                    result.innerHTML = "You procrastinate a lot.";
                    lazy(userInputOneValue, userInputTwoValue);
                } else if (userInputTwoValue.toLowerCase() === "yes") {
                    result.innerHTML = "You sometimes let work pile up and become overwhelming.";
                    lazy(userInputOneValue, userInputTwoValue);
                } else {
                    result.innerHTML = "Sorry, your answer for question two must be either yes or no.";
                }
            } else if (Number(userInputOneValue) > 1) {
                if (Number(userInputOneValue) > 24) {
                    result.innerHTML = "How do you work more than 24 hours a day?";
                } else if (userInputTwoValue.toLowerCase() === "no") {
                    result.innerHTML = "You procrastinate on difficult/stressful assignments.";
                    lazy(userInputOneValue, userInputTwoValue);

                } else if (userInputTwoValue.toLowerCase() === "yes") {
                    result.innerHTML = "You don’t procrastinate and work hard 🤓.";
                    lazy(userInputOneValue, userInputTwoValue);
                } else {
                    result.innerHTML = "Sorry, your answer for question two must be either yes or no.";
                }
            } else {
                result.innerHTML = "Sorry, your answer for question one must be a number.";
            }
}

function button (eventListener) {
    if (eventListener === "mousedown") {
        answerButton.style.backgroundColor="#8B0000";
    } else if (eventListener === "mouseup") {
        answerButton.style.backgroundColor="red";
    } else if (eventListener === "mouseover") {
        answerButton.style.backgroundColor="FireBrick";
    }
}


answerButton.addEventListener("mousedown", function(){
    button("mousedown");
});
answerButton.onmouseout=function(){
    button("mouseup");
};
answerButton.addEventListener("mouseover", function(){
    button("mouseover");
});

answerButton.addEventListener("click", function(){
	answer();
});

document.querySelector("body").addEventListener("keydown",function(event) {
	if (event.code === "Enter") {
        answer();
    }
});
