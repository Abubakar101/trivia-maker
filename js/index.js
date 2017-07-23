let randomNumber;
let questionNumber = 0;
let tmp_question = [];
const $el = {
  question: document.querySelector("#question"),
  answers: document.querySelector(".answers"),
  explain: document.querySelector(".explain"),
  buttonNext: document.querySelector("#nextbtn"),
  buttonBack: document.querySelector("#backbtn"),
  questionNum: document.querySelector(".questionNum")
};



/* Things to do!
  @Show Current Question Number
  @ Randomize also the answer choices
  @count score of average 
*/// *Personal NOTE = Random number + for loop = problem!







// Shuffling and using for loop to push random  (Question/answer/Explanation) object from quiz.js and into tmp_question[]
let questionsLength = questions.length
for (var i = 0; i < questionsLength; i++) {
  randomNumber = Math.floor(questions.length * Math.random());
  tmp_question.push(questions[randomNumber]);
  questions.splice(randomNumber, 1);

}
///////////////////////////////////////////////////////////////////////////////////
//@Buttons 
//Button NEXT for NEXT question
$el.buttonNext.addEventListener('click', function (e) {
  questionNumber++;
  buildQuestion(tmp_question[questionNumber])
})

//Button BACK to go back to previous question
$el.buttonBack.addEventListener('click', function (e) {
  questionNumber--;
  buildQuestion(tmp_question[questionNumber])
})

///////////////////////////////////////////////////////////////////////////////////
buildQuestion(tmp_question[0]);

function buildQuestion(data) {
  let question = data.question;
  let answers = data.answers;
  $el.answers.innerHTML = "";
  $el.explain.innerHTML = "";

///////////////////////////////////////////////////////////////////////////////////
  //Remove Back Button at first Question
  if (questionNumber === 0) {
    $el.buttonBack.style.display = 'none';
  } else {
    $el.buttonBack.style.display = 'block';
  }
  //Remove Next Button at last Question
  if (questionNumber === tmp_question.length - 1) {
    $el.buttonNext.style.display = 'none';
  } else {
    $el.buttonNext.style.display = 'block';
  }
///////////////////////////////////////////////////////////////////////////////////

  //Current Question Number and Questions total quantity (on TOP right Corner)
  $el.questionNum.innerHTML = (questionNumber + 1) + " - " + tmp_question.length;


///////////////////////////////////////////////////////////////////////////////////

  // creating new div for each choice
  $el.question.innerHTML = question;
  answers.forEach(function (answer) {
    let div = document.createElement("div");
    div.className = "answer";
    div.innerText = answer.text;

    //add click event to answer
    div.addEventListener(
      "click",
      function (e) {
        //remove active class from other siblings
        Array.from(
          $el.answers.querySelectorAll(".answer")
        ).forEach(function (item) {
          item.classList.remove("active");
          item.classList.remove("answerFalse");

        });

        //add 'active' class to self when answer is right
        //remove 'active' class and add new class with 'RED color' and new div with explanation when the answer is wrong.
        if (answer.correct === true) {
          e.target.classList.add("active");
          e.target.classList.remove("expDiv");
        } else {
          e.target.classList.add("answerFalse");

          // add explanation div when the answer is wrong!
          if ($el.explain.innerHTML === "") {
            let expDiv = document.createElement("div");
            expDiv.className = "expDiv";
            expDiv.innerText = data.explanation;
            $el.explain.appendChild(expDiv);
          }
        }

      },

    );

    //append answer to answers
    $el.answers.appendChild(div);

  });
}