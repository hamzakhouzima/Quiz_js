
const nextqst = document.querySelector("#next")

let questionText = document.querySelector('.question')
const progressText = document.querySelector('#progressText')
var scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')
var choices =Array.from(document.querySelectorAll('.choice-text'))
var answers = Array.from(document.querySelectorAll(".choice-container"))


var x;
var counter;
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


  var q;


function getQuestion(x){

    choices.forEach(element=>{
        questionText.innerHTML=questions[x].question
        questions.forEach((answer,index)=>{ 
        if(x==index){
            var number = element.dataset['number']
            element.innerHTML = answer['choice' + number] 
        }
    });

});

}





function getAnswer(item){   
    var UserAnswer=item.getAttribute('data-number')
    
   
    
    increment()
    let RightAnswer = questions[q].answer
    
    // console.log(questions[0].answer)
    var i=0
    if(UserAnswer==RightAnswer){
        alert("riiiiiight biiitch")
        i=i+10
        document.querySelector('#score').innerHTML = i
        // console.log(i)
        return true;
    }else{
        alert("not right ")
        return false;
    }
    

}
function increment(){
    
    getQuestion(q)
    q=q+1
    console.log(q)
    // return q

}












//quiz logic , onclick check the dataset of the clicked answer and compare it with the answer from the array above 


