// start quiz button
// once I start the quiz the timer will start to countdown for 75 sec
var timeEl = document.querySelector("#time-left");
var startBtn = document.getElementById("button");
// var timer= setInterval(()=> {startTime})
var secondsLeft = 75;
var quizTile = document.querySelector("#title");



startBtn.addEventListener("click", () => {
    startTime();




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

    // var questions = choices.values(questions);
    document.getElementById("title").innerHTML = questions.join("");

    console.log(questions);

    // for loop
    for (var i = 0; i < questions.length; i++) {
        var q = questions[i].questions
        var a = questions[i].answer
        console.log(q);
        console.log(a);
    }

});


// timer function 
function startTime() {
    console.log("startTime");
    var timerInterval = setInterval(function () {
        console.log("setInterval");
        timeEl.textContent = secondsLeft;
        secondsLeft--;
        console.log(secondsLeft);
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            console.log(timerInterval);

        }
    }, 1000);
}




// finish my questions - done

//get the question on the page

//when you select a choice you will prompted with correct or wrong

//goes to the next question in the loop



// Here are the questions

//  var choiceNode = document.createElement("button");
// choiceNode.onclick = questionClick;