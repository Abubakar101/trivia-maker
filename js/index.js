const $el = {
  question: document.querySelector("#question"),
  answers: document.querySelector(".answers")
};

// Getting random Q/S object from quiz.js and into tmp_question_obj
let randQues = questions[Math.floor(Math.random() * questions.length)];





let tmp_question_obj = {
  question: randQues.question,
  answers: [
    // { text: randQues[], correct: false },
    // { text: "flie", correct: false },
    // { text: "abubakar", correct: true },
    // { text: "techsin", correct: false }
  ]
};

let ans = randQues.answers;
console.log('answers: ', ans)
for (let i = 0; i < ans.length; i++) {
  tmp_question_obj.answers.push(ans[i]);
}



buildQuestion(tmp_question_obj);

function buildQuestion(data) {
  let question = data.question;
  let answers = data.answers;
  //TODO shuffle answers

  $el.question.innerHTML = question;
  answers.forEach(function(answer) {
    let div = document.createElement("div");
    div.className = "answer";
    div.innerText = answer.text;

    //add click event to answer
    div.addEventListener(
      "click",
      function(e) {
        //remove active class from other siblings
        Array.from(
          $el.answers.querySelectorAll(".answer")
        ).forEach(function(item) {
          item.classList.remove("active");
        });
        //add active class to self
        e.target.classList.add("active");
      },
      false
    );

    //append answer to anaswers
    $el.answers.appendChild(div);
  });
}