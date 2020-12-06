var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question('Please enter your name to start the Marvel Quiz ');

var userWelcomeMessage = " Hello,  " + userName + " 👋" ;
console.log(userWelcomeMessage);

var highScores = [
  {
    name:"Ramesh",
    score:10
  },
  {
    nanme:"Ganesh",
    score:9
  }
]
//play function

function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log("You are correct! ");
  score = score +2;
  }else{
    console.log("That's Wrong! ");
    score = score-1;
  }
  console.log("current score:" , score);
  console.log("--------");
}
//objects in the array
var questions = [
  {
    question:  " Here's the first Question \n 1️⃣  In the 2012 movie, The Avengers features Captain America. What is his real name?\n a)Buck rogers \n b)Steve Rogers \n c)Tony Stark \n d)Ted Rogers ",
    answer:"b"
  },
  {
    question: " \n 2️⃣  Who is the leader of S.H.I.E.L.D? \n a)Nick-fury\n b)Tony-stark \n c)Bruce-banner \n d)Diana-reaveus ",
    answer:"a"
  },
  {
question:" \n 3️⃣  Which superhero does Bruce Banner transform into?\n a)Ant-man \n b)Hulk \n c)Iron-man \n d)Hawk-eye ",
answer:"b"
  },
  {
    question:" \n 4️⃣  Who is Loki's adoptive brother?\n a)Nick-fury \n b)Black-panther \n c)Peter-parker \n d)Thor ",
    answer:"d"
  },
  {
    question:" \n 5️⃣  Which other superhero team do the Avengers join with to try to prevent the war ?\n a)The fantastic four \n b)The Incredibles \n c)Guardians of the Galaxy \n d)Power Rangers ",
    answer:"c"
  }
];
for (var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
 play(currentQuestion.question , currentQuestion.answer);
}
console.log("Your Final Score is:" , score);
if(score<5){
  console.log("OH DEAR... i think u should have guessed better about me")
}else{
console.log("Dudee... you have made itt...😍 😍");
  }