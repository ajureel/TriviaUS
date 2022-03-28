
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
        questionDiv.style = '';
        var answers = data.incorrect_answers;
        var myRdm = Math.floor(Math.random() * 4);
        answers.splice(myRdm, 0, data.correct_answer);
        console.log (answers);
        var answerBts = [choiceA, choiceB, choiceC, choiceD];
        for (var i = 0; i < 4; i++){
            answerBts[i].innerText = answers[i];
            if (answers[i] == data.correct_answer){
                answerBts[i].setAttribute("isCorrect", "true");
            } else {
                answerBts[i].setAttribute("isCorrect", "false");
            }
        }
    })
};

myLoad();

//QoD click
questionDiv.addEventListener("click", function () {
    //check anwer to 
    //alert("here: " + event.target.innerText);
    if (event.target.getAttribute("isCorrect") == "true"){
        answerCheck.innerText = "You got it! " + event.target.innerText + " is correct!";
    } else {
        answerCheck.innerText = "Try again!";
    }
});
