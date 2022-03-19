
var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

const myLoad = () =>{
    console.log('loading');
    //fetch QoD
    //Write QoD to screen

    var requestUrl = 'http://localhost:3001/api/q/qod/';

    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        questionTitle.innerText = data.question;

        // for (var i = 0; i < data.length; i++) {
        // var listItem = document.createElement('li');
        // listItem.textContent = data[i].html_url;
        // repoList.appendChild(listItem);
        })
};

myLoad();
/* <div id="questionDiv" style="display: none;">
<p id="questionTitle"></p>
<div class="buttons are-small column">
    <p><button id="btn0" class="button is-primary"></button></p>
    <p><button id="btn1" class="button is-primary"></button></p>
    <p><button id="btn2" class="button is-primary"></button></p>
    <p><button id="btn3" class="button is-primary"></button></p>
    <hr id="lineBreak" style="display: none;">
    <p id="answerCheck" style="display: none;"></p>
</div>
</div>
{
	"type": "multiple",
	"category": "Animals",
	"question": "The dish Fugu, is made from what family of fish?",
	"difficulty": "medium",
	"correct_answer": "Pufferfish",
	"incorrect_answers": [
		"Bass",
		"Salmon",
		"Mackerel"
	]
} */}

//QoD submit
const checkQoD = () => {
    //check anwer to 
}

// {
// 	"type": "multiple",
// 	"category": "Animals",
// 	"question": "The dish Fugu, is made from what family of fish?",
// 	"difficulty": "medium",
// 	"correct_answer": "Pufferfish",
// 	"incorrect_answers": [
// 		"Bass",
// 		"Salmon",
// 		"Mackerel"
// 	]
// }


// // Random Variables
// var questionNum = 0;
// var correctAns = 0;
// var questionIndex = 0;
// var scoreResult;
// // End of Random Variables

// // Connecting Elements
// var timer = document.getElementById("timer");
// var timeLeft = document.getElementById("timeLeft");
// var timesUp = document.getElementById("timesUp");

// var startDiv = document.getElementById("start");
// var startQuizBtn = document.getElementById("start-quiz-button");

// var questionDiv = document.getElementById("questionDiv");
// var questionTitle = document.getElementById("questionTitle");
// var choiceA = document.getElementById("btn0");
// var choiceB = document.getElementById("btn1");
// var choiceC = document.getElementById("btn2");
// var choiceD = document.getElementById("btn3");
// var answerCheck = document.getElementById("answerCheck");

// var summary = document.getElementById("summary");
// var submitInitialBtn = document.getElementById("submitInitialBtn");
// var initialInput = document.getElementById("initialInput");
// var everything = document.getElementById("everything"); 