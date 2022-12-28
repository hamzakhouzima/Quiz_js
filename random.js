 
 
function randomise(n){
var mainSerie = []
var aliasSerie=[]
var q= 0
var result

for (var i = 0; i <= n ; i++) {
    mainSerie.push(i)
    //  console.log(i)
 }

var s=n
//  console.log(q)
while(aliasSerie.length<=s){
    q=mainSerie[Math.floor(Math.random() *  n)];
    n--
    aliasSerie.push(q)
    // console.log(mainSerie.indexOf(q))
    result = q
    // console.log(result)
    mainSerie.splice(mainSerie.indexOf(q),1)
    console.log("first "+q)

    // console.log("main  " + mainSerie)

    
}

// console.log("random "+q)
// console.log("alias " + aliasSerie)
// 
// console.log(q)
}
 randomise(10)
//  randomise(5)
