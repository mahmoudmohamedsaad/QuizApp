const quizData = [
    {
        question : "How old is Mahmod ?",
        a: "20",
        b: "21",
        c: "22",
        d: "24",
        correct : "c",
    },
    {
        question : "What is the most used programming languages in 2022 ?",
        a: "Java",
        b: "JavaScript",
        c: "Python",
        d: "C++",
        correct : "b",
    },
    {
        question : "What does HTML stand for ?",
        a: "HyperText Markup Language",
        b: "Hay Tey May Language",
        c: "How Told Mask Language",
        d: "Hello Text Marh Language",
        correct : "a",
    },
    {
        question : "What year was JavaScript lunched ?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct : "b",
    },
];
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit")


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;  
}
function getSelected(){    
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}
function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener('click' , () =>{
    const answer = getSelected();
    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2>You answerd correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>`
        }
    }
})