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
                                  const scoreGot = document.querySelector("#score");

                                  const showDiv=document.querySelector(".quiz-container");
                                  const hideDiv=document.querySelector(".block-div");
                                  const nameDiv=document.querySelector(".name-container");
                                  const finalDiv=document.querySelector(".final-container");

                                  const goBack=document.querySelector("go-back");
                                  const clearHighScore = document.querySelector("#clear");

                                  const option=document.querySelector(".option");
                                  const list1=document.querySelector(".li1");
                                  const list2=document.querySelector(".li2");
                                  const list3 =document.querySelector(".li3");
                                  const list4=document.querySelector(".li4");
                                 
                                  const savedName =document.querySelector("#saved-name");
                                  const  valueScored=document.querySelector("#score-value");

                                  const vaLue=document.querySelector("#value");
                                  const highScore=document.querySelector("#high-score");
 
                                  let isCorrect;
                                  let currentQuiz = 0;
                                  let score = 0;
                                  let timer;
                                  let timerCount;
                                  let answerCounter = 0;
                                  
                                  const startGame = () => {
                                      startTimer();
                                     
                                      timerCount = 75;
                                      myFunction();
                                  loadQuiz();
                                 }

const loadQuiz = () => {
  
  let currentQuizData = quizData[currentQuiz];
                                  questionEl.innerText = currentQuizData.question;

                                  ans1.innerText = currentQuizData.a;
                                  ans2.innerText = currentQuizData.b;
                                  ans3.innerText = currentQuizData.c;
                                  ans4.innerText = currentQuizData.d;
 
}




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
                                              timerCount-=15;//decrement timer.
                                                 }  
                                  //startTimer(totalCounter/2);
                                                                                            
                                                       inputSetCorrect();   
                                                       inputSetWrong();                                                        
                                                    
                                  
                                  currentQuiz++;
                                 

                                  if(currentQuiz>=quizData.length){
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

                                    scoreValue.innerHTML=score;
                                    scoreGot.innerHTML=score;
                                    vaLue.innerHTML=score;
                                   // scoreValue.setAttribute("value","score");
              //localStorage.setItem('score','score');
                                //  console.log(localStorage.getItem(score));
                                 
                                  }
                                  
                                   resLt.style.display="block" ;   
                                   //alert(quizData.length);                             
                                   loadQuiz();
                                  }
                                   // The setTimer function starts and stops the timer and triggers winGame() and loseGame()

                  
                 function inputSetCorrect(){
                   
                   if(isCorrect){
                   // alert("helloo correct");
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
                   //alert("hellooooo wrong");
                   //var x = document.createElement("INPUT");
                   //x.setAttribute("type", "text");
                  resLt.setAttribute("value","wrong");
                  // document.body.appendChild(x);
                                   //resLt.innerHTML="wrong";
                }}

//timer function

  function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (currentQuiz==quizData.length && timerCount > 0) {
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
                                 
///function myFunction

  function myFunction(){
    //e.stopPropagation();
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
let studentGrade=[""];
function saveLastData() {
  // Save related form data as an object
  const studentGrade = {
    
    score: scoreGot.value,
    student: stdentName.value
  
  };  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
 localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
 
}

function renderLastData() {
  if(finalDiv.style.display="none"){
    finalDiv.style.display="block";
    
  }else{
  finalDiv.style.display="none";
    
  }
   highScore.style.display="none";
   timerElement.style.display="none";
  hideDiv.style.display = "none";
  showDiv.style.display = "none";
  nameDiv.style.display = "none";
  


  // Use JSON.parse() to convert text to JavaScript object
  const lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
  // Check if data is returned, if not exit out of the function
  if (lastGrade !== null) {
  
  document.getElementById("saved-name").innerHTML = lastGrade.student;
  document.getElementById("score-value").innerHTML = lastGrade.score;
  

  }
}

 


function startDiv(e){
  

 if(finalDiv.style.display="none"){
  finalDiv.style.display="block";
  
}else{
finalDiv.style.display="none";


}
}


submit.addEventListener("click", function(event) {
event.preventDefault();
saveLastData();
renderLastData();
});
//**************************************************************************************************** */

var clearScore=document.querySelector(".clearScore");
function clearHighScoreFunction() {

  
  clearScore.setAttribute("display:none");
  
  
}


///******************************************************** */
//set stopPrapagation to main Div
const maiN=document.querySelector(".load-page-container");
function maiNFunction(e){
  e.stopPropagation();
}

maiN.addEventListener("click",maiNFunction,false);



//background colors to list option
option.setAttribute("style", "background:#C8C8C8	; padding:16px;");
// Add styling to list items
list1.setAttribute("style", " color:black; background: #FFFFFF	; padding: 3px; margin-left: 25px;");
list2.setAttribute("style", " color:black; background: #FFFFFF	; padding: 3px; margin-left: 25px;");
list3.setAttribute("style", " color:black; background: #FFFFFF; padding: 3px; margin-left: 25px;");
list4.setAttribute("style", " color:black; background: #FFFFFF	; padding: 3px; margin-left: 25px;");



                           parentOption.addEventListener("click", getCheckAnswer, false);
                                
                      
                                  start.addEventListener('click', startGame);
                                 goBack.addEventListener('click', startDiv);
                                clearHighScore.addEventListener("click",clearHighScoreFunction);