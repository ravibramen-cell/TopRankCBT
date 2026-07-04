let currentQuestion = 0;
let userAnswers = [];

function loadQuestion() {

document.querySelector(".question").innerHTML =
"Q" + (currentQuestion+1) + ". " + questions[currentQuestion].question;

let option=document.querySelectorAll(".option");

for(let i=0;i<4;i++){

option[i].innerHTML=
String.fromCharCode(65+i)+". "+questions[currentQuestion].options[i];

option[i].style.background="#fff";

if(userAnswers[currentQuestion]==i){

option[i].style.background="#90EE90";

}

}

}

document.querySelectorAll(".option").forEach((item,index)=>{

item.onclick=function(){

userAnswers[currentQuestion]=index;

loadQuestion();

}

});

document.querySelector(".next").onclick=function(){

if(currentQuestion<questions.length-1){

currentQuestion++;

loadQuestion();

}

}

document.querySelector(".prev").onclick=function(){

if(currentQuestion>0){

currentQuestion--;

loadQuestion();

}

}

window.onload=loadQuestion;
