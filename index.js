const readlineSync = require("readline-sync");
const chalk= require("chalk");
chalk.stderr('blue')







const questions = [
  {
    question:chalk.bgCyan.bold("What is Jethalal's father, Bapu ji's, real name?\n") ,
    options: ["Champak Sharma Gada",
      "Natwarlal Prabhashankar Udhaiwala",
      "Champaklal Jayantilal Gada",
      "Jayantilal Giridharlal Gada"],
    answer: "Champaklal Jayantilal Gada"
  },
  {
    question: chalk.bgCyan.bold("What is the name of the company where Popatlal works as a reporter?\n"),
    options: ["Express Mail", 'Toofan Mail', "Aandhi Express", "Toofan Express"],
    answer: "Toofan Express"
  },
  {
    question:chalk.bgCyan.bold("Complete this line from the title song of the show:\
Problem toh hai sabke saath\n Bas ___ ki hai baat\n Taarak Mehta ka ooltah chashmah\n"),
    options: ["suljhane", "nazariye", "bhulane", "dekhne"],
    answer: "nazariye"
  },
  {
  question:chalk.bgCyan.bold("On which street is the Gokuldham society located?"),
  options: ["Powder gali, Goregaon East.", "Lower Parel", "TM Street, Andheri West", "Yeh toh na ho paega."],
  answer: "Powder gali, Goregaon East."
  },
  {
  question:chalk.bgCyan.bold("What is the name of the bhojnalaya where Bagha and Natu Kaka have food?"),
  options: ["Gujarati Bhojnalya", "Padmini Bhojnalaya", "Savarna Bhojnalaya", "Padmavati Bhojnalaya"],
  answer: "Padmavati Bhojnalaya"

  }

]

let response = [];
let userScore = 0;

console.log(chalk.bold.blue("***EPIC JETHALAL FAN QUIZ***\n----------------------------\n"));

function askMultipleQuestions() {
  questions.map(question => {
    let response=readlineSync.keyInSelect(question.options, question.question, {limit:[1-4]});
    validateAnswers(question,response)
  }
  );
  
 
}

function validateAnswers(question,response) {
  
    if (question["options"][response.toString()] === question.answer.toString()) {
     
     console.log(`${question['options'][response]}, ${chalk.green("Sahi Jawab")}`);
      userScore++;
    } else {
      console.log(`${question['options'][response]}, ${chalk.red("Galat Jawab")}`);
    }
  
  console.log(`Apka score hai ${userScore}\n
-----------------------------------------`)
checkHighScore();
}

function checkHighScore(){
  const highestScore=4;
  if(highestScore===userScore){
    console.log(chalk.green("You just equalled the highestScore of 4"));
  }else if(highestScore<userScore){
    console.log(chalk.bgGreen(`You Beat the Highest Score of ${highestScore} with your smashing ${userScore} correct answers.`))

  }
}

askMultipleQuestions()
