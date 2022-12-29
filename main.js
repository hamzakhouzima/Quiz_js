
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
var aliasSerie=[]
randomise(4)  

let question_random=[];
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


console.log('rnaddd')
console.log(question_random)


  var q=0;
  var score=0

//   getQuestion(q)
function getQuestion(x){
       questionText.innerHTML=questions[x].question
       document.querySelector('.ch-1').innerHTML=questions[x].choice1
       document.querySelector('.ch-2').innerHTML=questions[x].choice2
       document.querySelector('.ch-3').innerHTML=questions[x].choice3
       document.querySelector('.ch-4').innerHTML=questions[x].choice4
//     choices.forEach(element=>{

//         questionText.innerHTML=questions[x].question
//         questions.forEach((answer,index)=>{ 
//         if(x==index){
//             var number = element.dataset['number']
//             element.innerHTML = answer['choice' + number]  
//         }
//     });

// });


}




    getQuestion(aliasSerie[q])

    console.log('ftfft')
    console.log(aliasSerie)


function getAnswer(item){   
    var UserAnswer=item.getAttribute('data-number')
    // console.log(q)
    // let obj = {}
    let RightAnswer = questions[aliasSerie[q]].answer
    // var cquestion = questions[q].question
if(q <questions.length-1){
            console.log(q)
            
            let countrrr=0;
            console.log('totoot')
            console.log(q)
            question_random[q]=questions[aliasSerie[q]]
            console.log(question_random)
            increment()
            getQuestion(q)      
            if(UserAnswer==RightAnswer){
                score=score+10 
                document.querySelector('#score').innerHTML = score
        
                 }
            else {
                if(UserAnswer==RightAnswer){
                    score=score+10 
                    document.querySelector('#score').innerHTML = score          
                }
                }
}else{
    
    question_random[q]=questions[aliasSerie[q]]
    console.log(question_random)
}
}












function showResult(check_userChoice,x){
    let ele1 =document.getElementsByClassName("choice-container")
    questionText.innerHTML=questions[x].question 
    for(let count=0 ; count<questions.length;count++){
        ele1[count].style.display="block"
    }
    document.querySelector('.ch-1').innerHTML=questions[x].choice1
    document.querySelector('.ch-2').innerHTML=questions[x].choice2
    document.querySelector('.ch-3').innerHTML=questions[x].choice3
    document.querySelector('.ch-4').innerHTML=questions[x].choice4
    let CorrectAnswer = questions[x].answer
    // console.log(CorrectAnswer)


    choices.forEach(element=>{
    

        questions.forEach((answer,index)=>{ 
                if(x==index){ 
                    var number = element.dataset['number']
                    element.innerHTML = answer['choice' + number] 
                    console.log(element)
                    
                }
        
        });

   
    });

 
if(check_userChoice==CorrectAnswer){
        alert("this is the result")
    }
    else{
        alert('kassol')
}


}          




function randomise(n){
    var mainSerie = []
    let qs= 0
    var result
    
    for (var i = 0; i <= n ; i++) {
        mainSerie.push(i)
        //  console.log(i)
     }
    
    var s=n
    //  console.log(q)
    while(aliasSerie.length<s){
        let rand = Math.floor(Math.random() *  n)
        qs=mainSerie[rand];
      
        n--
        aliasSerie.push(qs)
        // console.log(mainSerie.indexOf(q))
        result = qs
        // console.log(result)
        mainSerie.splice(mainSerie.indexOf(qs),1)
        // console.log("first "+q)
    
        // console.log("main  " + mainSerie)
        //console.log(aliasSerie)
        // return q
    
    
    }
    
    }
  
    


    // let show_score = score +"/"+ questions.length 
    // document.getElementById("score")=show_score
    
    
    

    // correct = right

    
    


    
    // console.log(choices) 








// getQuestion(2)

function increment(){
  

    q=q+1
  
   

    return q
}






// function submit



//quiz logic , onclick check the dataset of the clicked answer and compare it with the answer from the array above 

