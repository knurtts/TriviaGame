var questions = [{
        question: "Which dinosaur was the first to ever be discovered?",

        answers: {
            a: "Brontosaurus",
            b: "Iguanadon",
            c: "Tyranosaurus Rex"
        },

        correctAnswer: "b",
    },
    {
        question: "Which dinosaur definitely had feathers?",

        answers: {
            a: "Velociraptor",
            b: "Pterranodon",
            c: "Dilophosaurus",
        },

        correctAnswer: "a",
    },
    {
        question: "Which is the largest known Carnivourus dinosaur?",

        answers: {
            a: "Tyranosaurus Rex",
            b: "Spinosaurus",
            c: "Giganotosaurus",
        },

        correctAnswer: "b",
    },
    {
        question: "What climate did dinosaurs prefer?",

        answers: {
            a: "Dense tropical forests",
            b: "Coastal regions",
            c: "All climates. Dinosaurs are found all over the world!",
        },

        correctAnswer: "c",
    },
];

var answerTime;
var i = 0;
var correct = 0;
var incorrect = 0;


$(document).ready(function () {

    console.log("Ready func");
    
    $("#question").html("Click Start to begin!");
    $("#startButton").click(startQuiz);
});


function nextQuestion() {
    i++;

    // console.log(i);

    setTimeout(displayQuestion(i), 1000);

}

function displayQuestion(i) {

    console.log("displayQuestion");

    if (i == questions.length) {
        endGame(correct, incorrect);
    }
    
    $("#question").html(questions[i].question);
    $("#answer-a").html("<input class='choice' type='radio' name='choice' id='a' /> <label for='a'>" + questions[i].answers.a + "</label>");
    $("#answer-b").html("<input class='choice' type='radio' name='choice' id='b' /> <label for='b'>" + questions[i].answers.b + "</label>");
    $("#answer-c").html("<input class='choice' type='radio' name='choice' id='c' /> <label for='c'>" + questions[i].answers.c + "</label>");
    
    $(".choice").click(function() {
        choice = $(this).attr("id");
        // console.log(choice);
        if (choice == questions[i].correctAnswer) {
            correct++;
            // console.log("right: " + correct);
        } else {
            incorrect++;
            // console.log("wrong: " + incorrect);    
        }
    });


}

function startQuiz() {

    console.log("startQuiz");
    
    displayQuestion(i);
    
    answerTime = setInterval(nextQuestion, 3000);
}

function endGame(arr1, arr2) {

    console.log("ending");
        
    if (arr1 > arr2) {
        $("#question").html("<h1>You Won!</p>");
        $("#answer-a").html("<b>Correct Answers:</b> " + correct);
        $("#answer-b").html("<b>Incorrect Answers:</b> " + incorrect);
        $("#answer-c").html("");
    } else {
        $("#question").html("<h1>You Lost...</p>");
        $("#answer-a").html("<b>Correct Answers:</b> " + correct);
        $("#answer-b").html("<b>Incorrect Answers:</b> " + incorrect);
        $("#answer-c").html("");
    }

    clearInterval(answerTime);

}
