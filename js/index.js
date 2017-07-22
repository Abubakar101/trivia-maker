let exp = true;

const $el = {
  question: document.querySelector("#question"),
  answers: document.querySelector(".answers"),
  explain: document.querySelector(".explain")
};

// Getting random Q/S object from quiz.js and into tmp_question_obj
let randQues = questions[Math.floor(Math.random() * questions.length)];

//questions[Math.floor(Math.random() * questions.length)];

// questions[0];


// creating an similar object as in quiz.js file and then after randomizing it, 
// the answers gets pushed into emtpy object-array to create a new Div for each answer.
let tmp_question_obj = {
  question: randQues.question,
  answers: [
    // { text: randQues[], correct: false },
    // { text: "flie", correct: false },
    // { text: "abubakar", correct: true },
    // { text: "techsin", correct: false }
  ],
  explanation: randQues.explanation
};


// when click on the right answer = change color to green
// Or red when click on wrong answer
// either way, show new div with explanation



buildQuestion(tmp_question_obj);

function buildQuestion(data) {
  let question = data.question;
  let answers = data.answers;

  //TODO shuffle answers
  let ans = randQues.answers;
  for (let i = 0; i < ans.length; i++) {
    tmp_question_obj.answers.push(ans[i]);
  }

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

          // add explanation when the answer is wrong!
          if (exp === true) {
            let expDiv = document.createElement("div");
            expDiv.className = "expDiv";
            expDiv.innerText = data.explanation;
            $el.explain.appendChild(expDiv);
            exp = false;
          }

        }

      },

    );

    //append answer to answers
    $el.answers.appendChild(div);
  });
}