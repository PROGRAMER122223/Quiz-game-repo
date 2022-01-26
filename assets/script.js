
//declaring array  quizData having 5 objects with 6 properties
const quizData = [
  {
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
    b: "enhance the document",
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

  },

  {
    question: "The Major components of the Web browser are ___",
    a: "Menu Bar.",
    b: "ToolBar.",
    c: "Location.",
    d: "All Of the Above.",
    correct: "btn4"
  },

  {
    question: " Which one of the following tags is used to insert graphics in the webpage",
    a: "<image>",
    b: "<images>",
    c: "<img>",
    d: "<graphics>",
    correct: "btn4"

  }
];

//declaring referals variable by using query selectors
const start = document.querySelector("#start");//start button
const quiz = document.querySelector("quiz");//quiz container
const answerEls = document.querySelectorAll(".answer");//all 4 answers
const questionEl = document.querySelector(".question");//question

const ans1 = document.querySelector("#btn1");//referal for answers
const ans2 = document.querySelector("#btn2");
const ans3 = document.querySelector("#btn3");
const ans4 = document.querySelector("#btn4");

const parentOption = document.querySelector(".option");//parent option
const timerElement = document.querySelector(".timer-count");//timer element
const resLt = document.querySelector(".result");//result to display wrong or correct
const resLt1 = document.querySelector(".result1");//result to display wrong or correct
const stdentName = document.querySelector("#last-name");//name of student
const submit = document.querySelector("#submit");//submit button
const scoreValue = document.querySelector("#scoreValue");//score value display in page element
const scoreGot = document.querySelector("#score");//score in text input

const showDiv = document.querySelector(".quiz-container");//div conatiner 
const hideDiv = document.querySelector(".block-div");
const nameDiv = document.querySelector(".name-container");
const finalDiv = document.querySelector(".final-container");

const goBack = document.querySelector("go-back");//button
const clearHighScore = document.querySelector("#clear");//button

const option = document.querySelector(".option");
const list1 = document.querySelector(".li1");//answers
const list2 = document.querySelector(".li2");
const list3 = document.querySelector(".li3");
const list4 = document.querySelector(".li4");

const savedName = document.querySelector("#saved-name");//name saved
const valueScored = document.querySelector("#score-value");//scored value

const vaLue = document.querySelector("#value");
const highScore = document.querySelector("#high-score");//high score

let isCorrect;
let currentQuiz = 0;
let score = 0;
let timer;
let timerCount;
let answerCounter = 0;
//start game function
const startGame = () => {
  startTimer();

  timerCount = 75;
  myFunction();
  loadQuiz();
}
//gets first object from the array
const loadQuiz = () => {

  let currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;

  ans1.innerText = currentQuizData.a;
  ans2.innerText = currentQuizData.b;
  ans3.innerText = currentQuizData.c;
  ans4.innerText = currentQuizData.d;

}


//text input for last question in name-container div
function closeresLt1() {
  resLt1.style.display = " none";
}

// function to get checked element and get the result

const getCheckAnswer = (e) => {
  e.stopPropagation();
  if (e.target !== e.currentTarget) {
    var clickedItem = e.target.id;
    //alert("hello" + clickedItem);
  }

  if (clickedItem == quizData[currentQuiz].correct) {
    //alert("correct");
    isCorrect = true;
    score++;

  } else {

    isCorrect = false;
    timerCount -= 15;//decrement timer.
  }
  
  inputSetCorrect();//function to check result
  inputSetWrong();


  currentQuiz++;//increment question,means move to next object

  //if all questions answered,get score
  if (currentQuiz >= quizData.length) {
    console.log("score is", score);
      //setItem(score);
    if (nameDiv.style.display = "none") {//move to name-container
      nameDiv.style.display = "block";

    } else {
      nameDiv.style.display = "none";

    }
    hideDiv.style.display = "none";
    showDiv.style.display = "none";
    finalDiv.style.display = "none";


    if (isCorrect) {
      resLt1.setAttribute("value", "correct");//display result of last question
      const timeout = setTimeout(closeresLt1, 1000);
    }
    else {
      resLt1.setAttribute("value", "wrong");
      const timeout = setTimeout(closeresLt1, 1000);//calls closeresLt1()
      //window.setTimeout("closeresLt1", 5000);
    }

    // scoreValue='${score}'.html;

    scoreValue.innerHTML = score;//sets score
    //scoreGot.innerHTML=score;
    vaLue.innerHTML = score;//sets score
    document.getElementById("score").value=score;//input text gets value of score
  }

  resLt.style.display = "block";//input text for result shows correct or wrong
                              
  loadQuiz();//call function again for next question
}



function inputSetCorrect() {//if answer is correct ,sets text input to correct

  if (isCorrect) {
    // alert("helloo correct");
    resLt.setAttribute("value", "correct");
    // document.body.appendChild(x);
  }
}
function inputSetWrong() {
  if (!isCorrect) {
    //alert("hellooooo wrong");
    resLt.setAttribute("value", "wrong");//if isCorrect is false,sets text input to wrong
    
  }
}

//timer function

function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (currentQuiz == quizData.length && timerCount > 0) {//if all questions answered ,stop timer
        // Clears interval and stops timer
        clearInterval(timer);
          
      }
    }
      else{                      //if timerCount <0,stop timer and go to name-container
        clearInterval(timer);
        timerCount=0;
        if (nameDiv.style.display = "none") {
          nameDiv.style.display = "block";
    
        } else {
          nameDiv.style.display = "none";
    
        }
        hideDiv.style.display = "none";
        showDiv.style.display = "none";
        finalDiv.style.display = "none";
        scoreValue.innerHTML = score;//gets score
   
        document.getElementById("score").value=score;//get the score scored
      }
        
  }, 1000);
}


//function myFunction
function myFunction() {
  //e.stopPropagation();
  resLt.style.display = "none";//for first question , text input for result is set to none
  if (showDiv.style.display = "none") {
    showDiv.style.display = "block";
  } else {
    showDiv.style.display = "none";
  }

  if (hideDiv.style.display === "none") {
    hideDiv.style.display = "block";
  } else {
    hideDiv.style.display = "none";
  }

}
//*******************************code to save data *****************************************/
let studentGrade = [""];
function saveLastData() {
  // Save related form data as an object
  const studentGrade = {

   // score: scoreGot.value,
   score:scoreGot.value,
    student: stdentName.value

  };  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem("studentGrade", JSON.stringify(studentGrade));

}

function renderLastData() {
  if (finalDiv.style.display = "none") {//makes final div visible
    finalDiv.style.display = "block";

  } else {
    finalDiv.style.display = "none";

  }
  highScore.style.display = "none";//hide the highScore
  timerElement.style.display = "none";//hide the timerElement
  hideDiv.style.display = "none";//all divs invisible
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



function startDiv(e) {
  e.stopPropagation();

  if (finalDiv.style.display = "none") {
    finalDiv.style.display = "block";

  } else {
    finalDiv.style.display = "none";


  }
}

submit.addEventListener("click", function (event) {//submit button to set n get data
  event.preventDefault();
  saveLastData();
  renderLastData();
});
//**************************************************************************************************** */

let clearScore = document.querySelector(".clearScore");//clears scores
function clearHighScoreFunction(e) {
  e.preventDefault();
  localStorage.setItem("studentGrade", JSON.stringify({ 
   score:"",student:""
  }));
 //location.reload();
  clearScore.style.display ="none";
}



//background colors to list option
option.setAttribute("style", "background:#C8C8C8	; padding:16px;");
// Add styling to list items
list1.setAttribute("style", " color:black; background: #D3D3D3	; padding: 3px; margin-left: 25px;");
list2.setAttribute("style", " color:black; background: #FFFFFF	; padding: 3px; margin-left: 25px;");
list3.setAttribute("style", " color:black; background: #D3D3D3	; padding: 3px; margin-left: 25px;");
list4.setAttribute("style", " color:black; background: #FFFFFF	; padding: 3px; margin-left: 25px;");



parentOption.addEventListener("click", getCheckAnswer, false);//function to clicked answer


start.addEventListener('click', startGame);//start button
goBack.addEventListener('click', startDiv);//go back to start button div
clearHighScore.addEventListener('click', clearHighScoreFunction);//clears high score by calling function