var questions = [{
        question: "Which dinosaur was the first to ever be discovered?",

        answers: {
            a: "Brontosaurus",
            b: "Megalosaurus",
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

    {
        question: "Which dinosaur had the smallest brain for its body size?",

        answers: {
            a: "Triceratops",
            b: "Apatosaurus",
            c: "Stegosaurus",
        },

        correctAnswer: "c",
    },

    {
        question: "Which of the following dinosaurs was toothless?",

        answers: {
            a: "Edmontosaurus",
            b: "Oviraptor",
            c: "Maiasaura",
        },

        correctAnswer: "b",
    },

    {
        question: "Which of the following is not a dinosaur?",

        answers: {
            a: "Pteranodon",
            b: "Archeopteryx",
            c: "Suchomimus",
        },

        correctAnswer: "a",
    }
];

var answerTime;
var i = 0;
var correct = 0;
var incorrect = 0;
var count = 15;
var timeDown;

var nextTimeout;


$(document).ready(function () {

    console.log("Ready func");

    $("#question").html("Click Start to begin!");

    var newButt = $("<button>")

    newButt.attr("id", "startButton");

    newButt.attr("type", "button");

    newButt.html("Start Quiz");

    $("#new-butt").html(newButt);

    $("#startButton").click(startQuiz);

});


function nextQuestion() {
    i++;

    count = 15;

    clearInterval(answerTime);

    clearInterval(timedown);

    nextTimeout = setTimeout(displayQuestion(i), 1000);

}

function interrupted() {
    console.log("interrupted!");

    clearInterval(answerTime);
    clearInterval(timedown);
    clearTimeout(nextTimeout);

    nextQuestion();
}

function displayQuestion(i) {

    timedown = setInterval(countDown, 1000);

    answerTime = setInterval(nextQuestion, 15000);

    count = 15;

    console.log("displayQuestion");

    if (i == questions.length) {
        endGame(correct, incorrect);
    }

    $("#question").html(questions[i].question);
    $("#answer-a").html("<input class='choice' type='radio' name='choice' id='a' /> <label for='a'>" + questions[i].answers.a + "</label>");
    $("#answer-b").html("<input class='choice' type='radio' name='choice' id='b' /> <label for='b'>" + questions[i].answers.b + "</label>");
    $("#answer-c").html("<input class='choice' type='radio' name='choice' id='c' /> <label for='c'>" + questions[i].answers.c + "</label>");

    $("#startButton").hide();

    $(".choice").click(function () {
        choice = $(this).attr("id");
        if (choice == questions[i].correctAnswer) {
            correct++;

            $("#answer-a").html("<h1>Correct!</h1>");
            $("#answer-b").html("");
            $("#answer-c").html("");

            $("#new-butt").hide();

            setTimeout(() => {
                nextQuestion();
            }, 2000);

        } else if (choice != questions[i].correctAnswer) {
            incorrect++;

            $("#answer-a").html("<h1>Incorrect!</h1>");
            $("#answer-b").html("");
            $("#answer-c").html("");
            $("#new-butt").hide();


            setTimeout(() => {
                nextQuestion();
            }, 2000);

        }
    });


}

function startQuiz() {

    console.log("startQuiz");

    displayQuestion(i);

    $("#counter").html(count);



    var newButt = $("<button>")

    newButt.attr("id", "nextButton");

    newButt.attr("type", "button");

    newButt.html("Next Question");

    $("#new-butt").html(newButt);

    $("#nextButton").click(interrupted);


}

function countDown() {
    count--;
    $("#counter").html(count);
}

function endGame(arr1, arr2) {

    console.log("ending");

    $("#nextButton").hide();

    if (arr1 > arr2) {
        $("#question").html("<h1>You Won!</h1>");
        $("#answer-a").html("<b>Correct Answers:</b> " + correct);
        $("#answer-b").html("<b>Incorrect Answers:</b> " + incorrect);
        $("#answer-c").html("");
    } else {
        $("#question").html("<h1>You Lost...</h1>");
        $("#answer-a").html("<b>Correct Answers:</b> " + correct);
        $("#answer-b").html("<b>Incorrect Answers:</b> " + incorrect);
        $("#answer-c").html("");
    }

    clearInterval(answerTime);
    clearInterval(timedown);
    clearTimeout(nextTimeout);
}