const question = document.querySelector('#question')
const choices = array.from(document .querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let   currentQuestion = {}
let   acceptingAnswers = true
let   score = 0
let   questionCounter = 0
let   availableQuestions = []




let questions = [
  {
    question : "what is the square root of 4",
    choice1 : "1",
    choice2 : "44",
    choice3 : "2",
    choice4 : "34",
    answer : 3,
  },
  {
    question : "ch7al sa3A",
    choice1 : "16:44",
    choice2 : "Sa3Ato llah",
    choice3 : "05:43",
    choice4 : "wa mada a3dadta laha ",
    answer : 4,
  },
  {
    question : "khouya fin jat lmslla",
    choice1 : "dor m3A dora",
    choice2 : "05 rue dar bou3za ",
    choice3 : "sir nichan ",
    choice4 : "hahia 7dak",
    answer : 2,
  },
  {
    question : "what is youcode ",
    choice1 : "a school",
    choice2 : "a philosophie",
    choice3 : "a project",
    choice4 : "food",
    answer : 1,
  },
]

// let x = questions[0].choice1


const SCORE_POINTS = 100
const MAX_QST = 4
function startGame(){
  score = 0;
  questionCounter = 0;
  availableQuestions = [...questions]
  getQuestion();

                     


  
}

function getQuestion(){

  if(questionCounter <= MAX_QST ){


  }





}