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
                                  const resLt=document.querySelector(".result");
                                  const resLt1=document.querySelector(".result1");
                                  const stdentName = document.querySelector("#last-name");
                                  const submit = document.querySelector("#submit");
                                  const scoreValue = document.querySelector("#scoreValue");

                                  const showDiv=document.querySelector(".quiz-container");
                                  const hideDiv=document.querySelector(".block-div");
                                  const nameDiv=document.querySelector(".name-container");
                                  const finalDiv=document.querySelector(".final-container");

                                  const goBack=document.querySelector("go-back");
                                  const clearHighScore = document.querySelector("#clear");

                                  let isCorrect;
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
  
  //inputSetCorrect();
  //inputSetWrong();
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
                                     //alert("correct");
                                                 isCorrect=true;
                                                         score++;
                                                                                                                                       
                                            
                                                 } else{

                                              isCorrect=false;

                                                 }
                                  //startTimer(totalCounter/2);
                                                                                            
                                                       inputSetCorrect();   
                                                       inputSetWrong();                                                        
                                
                              

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


                                   if(isCorrect){
                                   resLt1.setAttribute("value","correct");
                                  }
                                   else{
                                         resLt1.setAttribute("value","wrong");
                                                         
                                   }
                 
                                    // scoreValue='${score}'.html;

                                    scoreValue.innerHTML=parseFloat(score);
                                   // scoreValue.setAttribute("value","score");
              //localStorage.setItem('score','score');
                                //  console.log(localStorage.getItem(score));
                                 
                                  }
                                  
                                   resLt.style.display="block" ;                                
                                   loadQuiz();
                                  }
                                   // The setTimer function starts and stops the timer and triggers winGame() and loseGame()

                  
                 function inputSetCorrect(){
                   
                   if(isCorrect){

                    alert("helloo correct");
                   // var x = document.createElement("INPUT");
                   // x.setAttribute("type", "text");
                    resLt.setAttribute("value","correct");
                   // document.body.appendChild(x);
                  }
                   //resLt.innerHTML="correct";
                   //console.log(resLt.innerHTML);
                                    }
                function inputSetWrong(){
                  if(!isCorrect){
                   alert("hellooooo wrong");

                   //var x = document.createElement("INPUT");
                   //x.setAttribute("type", "text");
                  resLt.setAttribute("value","wrong");
                  // document.body.appendChild(x);
                 

                  //resLt.innerHTML="wrong";
                }}






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
       resLt.style.display="none";
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
//*******************************code to save data *****************************************/
let studentData=[""];
function saveLastData() {
  // Save related form data as an object
  const studentData ={
    
    score: scoreValue.value,
    student: stdentName.value
  
  };  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
 localStorage.setItem("studentData", JSON.stringify(studentData));
 console.log(studentData);
}

function renderLastData() {
  if(finalDiv.style.display="none"){
    finalDiv.style.display="block";
    
  }else{
  finalDiv.style.display="none";
    
  }
  hideDiv.style.display = "none";
  showDiv.style.display = "none";
  nameDiv.style.display = "none";
  




  // Use JSON.parse() to convert text to JavaScript object
  let lastData = JSON.parse(localStorage.getItem("studentData"));
  // Check if data is returned, if not exit out of the function
  if (lastData !== null) {
  document.getElementById("#saved-name").innerHTML = lastData.student;
  document.getElementById("#score-value").innerHTML = lastData.score;
  console.log(lastData);
  } else {
    return;
  }
}





/*function startDiv()
{ if(finalDiv.style.display="none"){
  finalDiv.style.display="block";
  
}else{
finalDiv.style.display="none";


}
}
*/
submit.addEventListener("click", function(event) {
event.preventDefault();
saveLastData();
renderLastData();
});
//**************************************************************************************************** */
/*var clearHighScoreFunction = document.querySelector("#clear");

function clearHighScore() {
  // Resets win and loss counts

//******************************************************** */
                           parentOption.addEventListener("click", getCheckAnswer, false);
                                
                              
                                  start.addEventListener('click', startGame);
                                 goBack.addEventListener('click', startDiv);
                                // clearHighScore.addEventListener("click",clearHighScoreFunction );



                                  
                                       
                                  
