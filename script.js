const questionElement = document.getElementById("question");
const choix = Array.from(document.getElementsByClassName("choix"));
const questionNumber = document.getElementById("question-number");
const questionCount = document.getElementById("question-count");

let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Quelle est la capitale de la France ?",
    choie1: "Londres",
    choie2: "Paris",
    choie3: "Madrid",
    choie4: "Rabat",
    answer: 2
  },
  {
    question: "Combien de planètes y a-t-il dans le système solaire ?",
    choie1: "7",
    choie2: "8",
    choie3: "9",
    choie4: "10",
    answer: 2
  },
  {
    question: "Qui a peint la Joconde ?",
    choie1: "Vincent van Gogh",
    choie2: "Pablo Picasso",
    choie3: "Léonard de Vinci",
    choie4: "Claude Monet",
    answer: 3
  },
  {
    question: "Quel est le plus grand océan du monde ?",
    choie1: "Océan Atlantique",
    choie2: "Océan Indien",
    choie3: "Océan Arctique",
    choie4: "Océan Pacifique",
    answer: 4
  },
  {
    question: "En quelle année a eu lieu la Révolution française ?",
    choie1: "1789",
    choie2: "1799",
    choie3: "1776",
    choie4: "1804",
    answer: 1
  }
];

function startQuiz() {
  questionCounter = 0;
  availableQuestions = [...questions];
  getNewQuestion();
}

function getNewQuestion() {
  if (availableQuestions.length === 0 || questionCounter >= questions.length) {
    alert("Quiz terminé !");
    document.getElementById("btnsuivant").addEventListener("click", window.location.href = "resultat.html");
    return;
  }

  questionCounter++;
  questionNumber.innerText = "Question " + questionCounter;
  questionCount.innerText = questionCounter + "/" + questions.length;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  questionElement.innerText = currentQuestion.question;

  choix.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choie" + number];
  });

  availableQuestions.splice(questionIndex, 1);
}
let resultat = 0;
choix.forEach(choice => {
  choice.addEventListener("click", e => {
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    if (selectedAnswer == currentQuestion.answer) {
        resultat+=1;
        alert("Bonne réponse !"+"points"+ resultat);
    } else {
      alert("Mauvaise réponse !" + "points : "+ resultat);
    }
  });
});

document.getElementById("btnsuivant").addEventListener("click", getNewQuestion);

startQuiz();

