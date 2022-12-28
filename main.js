
var nextqst = document.querySelector("#next")

let questionText = document.querySelector('.question')
var progressText = document.querySelector('#progressText')
var scoreText = document.querySelector('#score')
var progressBarFull = document.querySelector('#progressBarFull')
var choices =Array.from(document.querySelectorAll('.choice-text'))
var answers = Array.from(document.querySelectorAll(".choice-container"))
var right,wrong
var valid=[]
var notValid=[]


var x;
let questions = [
    {
      id : 1  ,
      question : "what is the square root of 4",
      choice1 : "1",
      choice2 : "44",
      choice3 : "2",
      choice4 : "34",
      answer : 3,
    },
    {
      id : 2,
      question : "ch7al sa3A",
      choice1 : "16:44",
      choice2 : "Sa3Ato llah",
      choice3 : "05:43",
      choice4 : "wa mada a3dadta laha ",
      answer : 4,
    },
    {
      id : 3,
      question : "khouya fin jat lmslla",
      choice1 : "dor m3A dora",
      choice2 : "05 rue dar bou3za ",
      choice3 : "sir nichan ",
      choice4 : "hahia 7dak",
      answer : 2,
    },
    {
      id : 4,
      question : "what is youcode ",
      choice1 : "a school",
      choice2 : "a philosophie",
      choice3 : "a project",
      choice4 : "food",
      answer : 1,
    },
  ]


  var q=0;
  var score=0

  getQuestion(q)
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

// }
// function getQuestionCorr(correct){
   
//     choices.forEach(element=>{

//         questionText.innerHTML=questions[correct].question
//         questions.forEach((answer,index)=>{ 
//         if(correct==index){
//             var number = element.dataset['number']
//             element.innerHTML = answer['choice' + number]  
//         }
//     });

// });

// }


getQuestion(q)

function getAnswer(item){   
    var UserAnswer=item.getAttribute('data-number')
    // console.log(q)
    let obj = {}
    let RightAnswer = questions[q].answer
    var q_id = questions[q].question
    if(q <questions.length-1){
    
    increment()
    getQuestion(q)
    console.log(q)
    }
    else {
        showResult(UserAnswer,RightAnswer,q) 
    }
    // console.log(questions[0].answer)
    if(UserAnswer==RightAnswer){
        // alert("riiiiiight biiitch")
        score=score+10 
        document.querySelector('#score').innerHTML = score

        obj[q_id] = UserAnswer;
        valid.push(obj) 
        console.log(valid) 
        
    }else{
        // alert("not right ")
        obj[q_id] = UserAnswer;
        notValid.push(obj) 
        console.log(notValid)
    }
    console.log("the right answer is :"+ RightAnswer)
    console.log("ur answer is " + UserAnswer )
    
   
 
    

}

function showResult(right,user,qindex){
    let ele1 =document.getElementsByClassName("choice-container")
    let ele2 = document.getElementsByClassName("result")
    document.getElementById("question").style.display='none'
    
   

        document.getElementById("question_result").innerHTML=questions[qindex].question
        questions.forEach((answer,index)=>{ 
        if(qindex==index){
            var number = right
            ele2.innerHTML = answer['choice' + number]  
        }
    });


  
  
  
  
  
  
  
  
  
  
    for(let count=0 ; count<questions.length;count++){
        ele1[count].style.display="none"
        
    }
    for(let j =0 ; j<2 ; j++){
        ele2[j].style.display="block"
    }






    

            document.getElementById("ll").innerHTML= right
            document.getElementById("ll2").innerHTML= user
    


    // let show_score = score +"/"+ questions.length 
    // document.getElementById("score")=show_score
    
    
    

    // correct = right

    
    


    
    // console.log(choices) 

}






// getQuestion(2)

function increment(){
  

    q++
  
   

    return q
}






// function submit



//quiz logic , onclick check the dataset of the clicked answer and compare it with the answer from the array above 

