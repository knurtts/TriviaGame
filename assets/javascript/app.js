var questions = [
    {
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


function nextQuestion(i) {
        var dispQuestion = $("#question").html(questions[i].question);
        var answerA = $("#answer-a").html("<input type='radio' id='a' /> <label for='a'>" + questions[i].answers.a + "</label>");
        var answerB = $("#answer-b").html("<input type='radio' id='b' /> <label for='b'>" + questions[i].answers.b + "</label>");
        var answerC = $("#answer-c").html("<input type='radio' id='c' /> <label for='c'>" + questions[i].answers.c + "</label>");dispQuestion;
        answerA;
        answerB;
        answerC;
    }
  

$(document).ready( function(){
    for (let i = 0; i < questions.length; i++) {
        setTimeout(nextQuestion(i), 3000);

    }
});