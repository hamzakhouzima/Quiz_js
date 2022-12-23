let questionText = document.querySelector('.question')

const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')


var choices =Array.from(document.querySelectorAll('.choice-text'))

//for(){
 

//}
// const currentQuestion = {}
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
    
function getQuestion(){
    var counter
    
  choices.forEach(element => { 
    console.log(element)
    for(counter = 0 ; counter<4 ; counter++ ){
     
     
        questionText.innerHTML=questions[counter].question
        element.innerHTML=questions[1].choice2
        console.log(counter)


}

});
 }


getQuestion()