var question = [
  {
    question: "Html Stands For ________________________________________________________________________________________________________________________________________________________________________________",
    options: [
      "Hyper Text Makeup Language",
      "html",
      "Case Cading Style Sheet",
      "Hypertext markup language",
    ],
    correctAns: "Hypertext markup language",
  },
  {
    question: "Css Stands For _______________________",
    options: [
      "Casecading Style Sheet",
      "Java",
      "Ram",
      "Hypertext markup language",
    ],
    correctAns: "Casecading Style Sheet",
  },
  {
    question: "Js Stands For _______________________",
    options: ["Java Style", "Java Script", "Script", "Script Src"],
    correctAns: "Java Script",
  },
  {
    question: "Dom Stands For _______________________",
    options: ["Document Object Model", "html", "Css", "Java"],
    correctAns: "Document Object Model",
  },
  {
    question: "Ram Stands For _______________________",
    options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
    correctAns: "Random Acccess Memory",
  },
  {
    question: "Rom Stands For _______________________",
    options: [
      "Hyper Text Markup Language",
      "html",
      "HTml",
      "Read Only Memory",
    ],
    correctAns: "Read Only Memory",
  },
]


var currentQuestion = document.getElementById('currentQuestion')
var totalQuestion = document.getElementById('totalQuestion')
var displayQuestion = document.getElementById('displayQuestion')
var displayOption = document.getElementById('displayOption')
var nextBtn = document.getElementById('nextBtn')
var submit = document.getElementById('submit')
// var displayMarks = document.getElementById('marks')
// var percent = document.getElementById('percent')
// var isPass = document.getElementById('isPass')
var selected=document.querySelectorAll('.options')


var currentIndex = 0;
var marks = 0

function beginQuiz() {
  displayOption.innerHTML = ""
  totalQuestion.innerHTML = question.length;
  currentQuestion.innerHTML = currentIndex + 1;
  displayQuestion.innerHTML = question[currentIndex].question;
  for (var i = 0; i < question[currentIndex].options.length; i++) {

    // console.log(question[currentIndex].options[i])
    displayOption.innerHTML += `<button name="${question[currentIndex].options[i]}" class="btn btn-outline-warning w-50 optionButton style.border-radius:20px mt-3">${question[currentIndex].options[i]}</button>`
  }
  
}
beginQuiz()
function next() {
  if (currentIndex + 1 == question.length) {
    
  }
  else {
    currentIndex++
    beginQuiz()
  }
}

  // console.log(marks)
  
  function checking(event) {
    // console.log(a, b, currentIndex, question[currentIndex], "smajh")
    if (event.target.name==question[currentIndex].correctAns) {
      marks++
      
    //  next()
  } else {
    marks--
  }
  console.log(marks)
  // console.log(question[currentIndex].correctAns,'dsd')
}  
displayOption.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }
// console.log(event.target.name)
  checking(event)
})

function showResult() {
  displayMarks.innerHTML=`Marks:${marks}`
  var percentage =marks / question.length * 100
  percent.innerHTML=`Percentage:${percentage}%`
  let g;
if(percentage<=90&&percentage>=80){
  g="A++"
}
else if(percentage>=70){
  g="A"
}
else{
  g="Fail"
}
Grade.innerHTML=`Grade:${g}`
}
