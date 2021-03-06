// start quiz button
// once I start the quiz the timer will start to countdown for 75 sec
var timeEl = document.querySelector("#time-left");
var startBtn = document.getElementById("button");
var secondsLeft = 60;
var quizTile = document.querySelector("#title");
var questionCounter = 0;
var results = document.querySelector("#result");
var highScore = document.getElementById("high-score");

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
    console.log(questions[questionCounter].questions);


    // create for loop to cycle through each choice to create new button element
    for (var i = 0; i < questions[questionCounter].choices.length; i++) {
        var choiceLi = document.createElement("br")
        var choiceBtn = document.createElement("BUTTON")
        choiceBtn.textContent = questions[questionCounter].choices[i];

        choiceBtn.addEventListener("click", () => {
            correctChoice();

        });

        // the id is choice  is attached to the choicebtn. when the choice btn is selected then it will loop through the questions
        document.getElementById("choice").append(choiceLi, choiceBtn);

    }
    console.log(questions);
}

// The user will see if their previous answer is wrong or correct
function correctChoice() {
    console.log(event.target)
    document.getElementById("result").innerHTML = "";
    var correct = questions[questionCounter].answer;
    var userChoice = event.target.textContent;

    console.log(questionCounter, correct, userChoice)
    if (userChoice === correct) {
        results.textContent = "Correct";

        console.log("true");

    }

    //  if user selects the wrong answer then -15 secs from timer
    else {
        results.textContent = "Wrong";
        secondsLeft -= 15;
        console.log("false");

    }

    // if the user answers all of the questions then quiz ends
    questionCounter++;
    if (questionCounter < questions.length) {
        nextQuestion();
    }
    else {
        document.getElementById("high-score").textContent = "View your score: " + secondsLeft;
        document.getElementById("all-done").style.display = "block";
    }
}

// the start button will start the time and go to question 1
startBtn.addEventListener("click", () => {
    startTime();
    nextQuestion();
    hideStartQuiz();

});

// This function hides the intro and the questions will appear

function hideStartQuiz() {

    var hideStart = document.getElementById("start-quiz");


    if (hideStart.style.display === "none") {
        hideStart.style.display = "block";

    }
    else {
        hideStart.style.display = "none";


    }
}

// hiding all done div until all questions have been answered. then hide questions div
document.getElementById("all-done").style.display = "none";


// timer function starts the time count down by 1 
function startTime() {
    console.log("startTime");
    var timerInterval = setInterval(function () {
        timeEl.textContent = secondsLeft;
        secondsLeft--;

        // when time reaches 0 or all 5 questions are answered then the quiz questions are hidden and all done page is shown
        if (secondsLeft === 0 || questionCounter === 5) {
            clearInterval(timerInterval);
            document.getElementById("quiz-question").style.display = "none";
            document.getElementById("all-done").style.display = "block";
        }
    }, 1000);
}

// // high score html 
// $(document).ready(() => {

//     // save to localStorage
//     // score and initials
//     // save a lot --
//     // two arrays -- will work but not recommended 
//     //object...
//     //object = {score: 10000000, initials:you}
//     // an array to hold them 
//     // string ... operations

//     let highScores = [];
//     let score;


//     // get high score and initials
//     score = 50;
//     initials = "KTB"

//     highScores.push({ score: score, intitials: initials })
//     console.log(highScores)

//     score = 25;
//     initials = "DAK";

//     localStorage.setItem('hi scores', Json.stringify(highScores))

//     //clear the array and load it from localStorage
//     highScores = []
//     highScores = Json.parse(localStorage.getItem("hi scores"));

//     // forEach

//     highScores.forEach((element) => {

//         // prints to the window
//         let newEl = document.createElement("ul");
//         newEl.textContent = `Initials: ${element.initials, Score: ${element.score}`;
//         document.getElementById("hi-score").appendChild(newEl)

//     })


// })


