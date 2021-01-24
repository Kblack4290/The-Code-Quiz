// start quiz button
// once I start the quiz the timer will start to countdown for 75 sec
var timeEl = document.querySelector("#time-left");
var startBtn = document.getElementById("button");
var secondsLeft = 75;
var quizTile = document.querySelector("#title");
var questionCounter = 0;
var results = document.querySelector("#result");


//question and choices variable
var questions = [{

    questions: "Commonly used data types DO NOT include_____.",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts"
},
{
    questions: "The condition in an if / else statement is enclosed within_____.",
    choices: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
    answer: "Square Brackets"
},

{
    questions: "Arrays in Javascript can be used to store_____.",
    choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of The Above"],
    answer: "All of The Above"
},

{
    questions: "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
    answer: "Commas"
},

{
    questions: "A very useful tool used during development and debugging for printing content to the debugger is.",
    choices: ["Javascript", "Terminal/Bash", "For Loops", "Console.Log"],
    answer: "Console.Log"
},

]




// When I click a choice then it will go to the next question
function nextQuestion() {
    document.getElementById("choice").innerHTML = "";
    document.getElementById("title").innerHTML = questions[questionCounter].questions;

    // create for loop to cycle through each choice to create new button element
    for (var i = 0; i < questions[questionCounter].choices.length; i++) {
        var choiceBtn = document.createElement("BUTTON")
        choiceBtn.textContent = questions[questionCounter].choices[i];





        choiceBtn.addEventListener("click", () => {
            nextQuestion();
            correctChoice();

        });

        // the id is choice  is attached to the choicebtn. when the choice btn is selected then it will loop through the questions
        document.getElementById("choice").append(choiceBtn);

    }
    questionCounter++;

    console.log(questions);
}

function correctChoice () {
    document.getElementById("result").innerHTML = "";
    var correct = questions[questionCounter].answer;
    var userChoice = questions[questionCounter].choices[""];

    if (correct === userChoice){
        console.log(true);
        
    } 

}





// the start button will start the time and go to question 1
startBtn.addEventListener("click", () => {
    startTime();
    nextQuestion();

});



// timer function starts the time count down by 1 
function startTime() {
    console.log("startTime");
    var timerInterval = setInterval(function () {
        
        timeEl.textContent = secondsLeft;
        secondsLeft--;
    
        if (secondsLeft === 0 || questionCounter === 5) {
            clearInterval(timerInterval); // this is where timer needs to reach 0
            

        }
    }, 1000);
}








//when you select a choice you will prompted with correct or wrong

//goes to the next question in the loop

