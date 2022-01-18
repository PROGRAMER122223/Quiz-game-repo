const quizData = [
 /* {   
      question: "There are ___ levels of heading in HTML",
      a: "Three",
      b: "Four",
      c: "Five",
      d: "Six",
      correct: "btn4"

  },

  {
      question: "The purpose of markup is to",
      a: "add hypertext capabilities",
      b:"enhance the document",
      c: "both A & B",
      d: "none of the above",
      correct: "btn3"


  },

 {
  question: "Which of the following tags do not require a terminator ?",
      a: "<u>",
      b: "<br>",
      c: "<b>",
      d: "none of the above",
      correct: "btn2"

    },*/

   {
                      question: "The Major components of the Web browser are ___",
                  a: "Menu Bar.",
                  b: "ToolBar.",
                  c: "Location.",
                  d: "All Of the Above.",
                  correct:"btn4"
    },

    {
                 question:" Which one of the following tags is used to insert graphics in the webpage",
                  a: "<image>",
                      b:  "<images>",
                          c:"<img>",
                              d: "<graphics>",
                                  correct:  "btn4"

    }




     ];
                                  const start = document.querySelector("#start");
                                  const quiz = document.querySelector("quiz");
                                  const answerEls = document.querySelectorAll(".answer");
                                  const questionEl = document.querySelector(".question");
                                  //var btn=getElementById("#submit");
                                  // const a = document.getElementById("a-text");
                                  // const b = document.getElementById("b-text") ;
                                  const ans1 = document.querySelector("#btn1");
                                  const ans2 = document.querySelector("#btn2");
                                  const ans3 = document.querySelector("#btn3");
                                  const ans4 = document.querySelector("#btn4");
                                
                                  const parentOption = document.querySelector(".option");
                                  const timerElement = document.querySelector(".timer-count");
                                  const res=document.querySelector(".result");
                                  const savedName=document.getElementById("#last-name")
                                  const submit = document.querySelector("#submit");
                                  const scoreValue=document.querySelector("#scoreValue");

                                  const showDiv=document.querySelector(".quiz-container")
                                  const hideDiv=document.querySelector(".block-div");
                                  const nameDiv=document.querySelector(".name-container");
                                  const finalDiv=document.querySelector(".final-container");

                                 
                                  let currentQuiz = 0;
                                  let score = 0;
                                  let timer;
                                  let timerCount;
                                  let answerCounter = 0;
/*function init() {

                                      getHighScore();
}
                                  */
const startGame = () => {
                                      startTimer();
                                     
                                      timerCount = 75;
                                      myFunction();
                                  loadQuiz();
}

const loadQuiz = () => {
  //timerCount=75;
  //deselectAnswer();
  //console.log(answerEls)
  //questionEl.innerHTML=quizData[0].question;
  let currentQuizData = quizData[currentQuiz];
                                  questionEl.innerText = currentQuizData.question;

                                  // a.innerText = currentQuizData.a;
                                  // b.innerText = currentQuizData.b;
                                  ans1.innerText = currentQuizData.a;
                                  ans2.innerText = currentQuizData.b;
                                  ans3.innerText = currentQuizData.c;
                                  ans4.innerText = currentQuizData.d;
//if(currentQuiz>currentQuizData.lenght){
// getScore();
//}



}
//function selectAnswer(){
//function getScore(){
//  console.log("getscore");
//}

//}
//loadQuiz();


//get the clicked element id and get results and loads new question
                                    const getCheckAnswer = (e) => {
                                      e.stopPropagation();
                                  if (e.target !== e.currentTarget) {
                                      var clickedItem = e.target.id;
                                     //alert("hello" + clickedItem);
                                    }



                                  if (clickedItem ==quizData[currentQuiz].correct) {
                                     alert("correct");
                                  score++;
                                
                              
                                  } else
                                  //startTimer(totalCounter/2);
                                  {    alert("wrong");                                                        
                                                        
                                         let a="wrong"   ;                                                                                       
                                
                                }

                                  //console.log(quizData[currentQuiz].correct); 
                                  ////return(wrong )        
                              
                                  currentQuiz++;
                                  if(currentQuiz>1){
                                    console.log("score is",score);
                                   // window.sessionStorage
                                    //setItem(score);
                                    if(nameDiv.style.display="none"){
                                      nameDiv.style.display="block";
                                      
                                    }else{
                                      nameDiv.style.display="none";
                                      
                                    }
                                    hideDiv.style.display = "none";
                                    showDiv.style.display = "none";
                                    finalDiv.style.display = "none";
                                     
                                    scoreValue.innerHTML=score;
                                 // sessionStorage.setItem('score','score');
                                 
                                  }
                                  
                                                                    
                                   loadQuiz();
                                  }
                                   // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (currentQuiz==5 && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
      
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      
    }
  }, 1000);
}
                                 
//let scoreGot=sessionStorage.getItem("score");
//console.log(scoreGot);


  function myFunction(){
    //const showDiv=document.querySelector(".quiz-container")
    //const hideDiv=document.querySelector(".block-div");
  // const nameDiv=document.querySelector(".name-container");
   /*     if(nameDiv.style.display="none"){
      nameDiv.style.display="block";
    }else{
      nameDiv.style.display="none";
    }
    if(finalDiv.style.display="none"){
      finalDiv.style.display="block";
    }else{
      finalDiv.style.display="none";
    }*/

      if(showDiv.style.display="none"){
        showDiv.style.display="block";
      }else{
        showDiv.style.display="none";
      }
    
    if (hideDiv.style.display === "none") {
      hideDiv.style.display = "block";
    } else {
      hideDiv.style.display = "none";
    }
  
  }
//function to save name entered
//******************************************************************************************************88 */

/*function saveLastGrade() {
// Save related form data as an object
var name = {
  student: savedName.value.trim()
  
};
  
 // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
localStorage.setItem("savedName", JSON.stringify(name));
console.log("name saved ",name.student);
}*/

/*function renderLastname() {
// Use JSON.parse() to convert text to JavaScript object
var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
// Check if data is returned, if not exit out of the function
if (lastGrade !== null) {
document.getElementById("saved-name").innerHTML = lastGrade.student;
document.getElementById("saved-grade").innerHTML = lastGrade.grade;
document.getElementById("saved-comment").innerHTML = lastGrade.comment;
} else {
  return;
}
}*/

/*submit.addEventListener("click", function(event) {
event.preventDefault();
saveLastGrade();
renderLastGrade();
});*/
//sessionStorage.setItem('score',score);
//console.log(sessionStorage.getItem(score));

//******************************************************** */
                           parentOption.addEventListener("click", getCheckAnswer, false);
                                
                              
                                  start.addEventListener('click', startGame);
                                  




                                  
                                       
                                  
