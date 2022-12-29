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
var newQuestion = []
var aliasSerie=[]

function randomise(n){
var mainSerie = []

let q= 0
var result

for (var i = 0; i <= n ; i++) {
    mainSerie.push(i)
    //  console.log(i)
 }

var s=n
//  console.log(q)
while(aliasSerie.length<s){
    let rand = Math.floor(Math.random() *  n)
    q=mainSerie[rand];
  
    n--
    aliasSerie.push(q)
    // console.log(mainSerie.indexOf(q))
    result = q
    // console.log(result)
    mainSerie.splice(mainSerie.indexOf(q),1)
    // console.log("first "+q)

    // console.log("main  " + mainSerie)
    console.log(aliasSerie)
    // return q


}

}

// let j

// for(j=0;j<questions.length;j++){
//    var p= newQuestion.fill(questions[j],randomise(questions.length))
//    console.log(p) 

// }

 randomise(10)  
//  randomise(5)
