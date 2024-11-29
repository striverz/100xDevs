import quizData from "./data.js";

const quizDiv = document.querySelector('.quiz');
let currentQuestionIndex = 0; // Track the current question
let cnt = 0;

// Function to render a question
function renderQuestion(index) {
    quizDiv.innerHTML = ''; // Clear the quiz container

    let data = quizData[index];
    let Div = document.createElement('div');
    let h1 = document.createElement('h1');
    let form = document.createElement('form');
    let btn = document.createElement('button');
    
    btn.innerHTML = (index==quizData.length-1? "Submit": "Next");

    h1.innerText = data.question;

    form.innerHTML = `
    <input type="radio" name="color" value="a">${data.a}
    <input type="radio" name="color" value="b">${data.b}
    <input type="radio" name="color" value="c">${data.c}
    <input type="radio" name="color" value="d">${data.d}
    `;

    form.addEventListener('change', (e) => {
        const correctOption = data.correct;

        if (e.target.type === 'radio' && e.target.value === correctOption) {
            cnt++;
        }
    });

    btn.addEventListener('click', () => {
        currentQuestionIndex++; // Move to the next question
        if (currentQuestionIndex < quizData.length) {
            renderQuestion(currentQuestionIndex); // Render the next question
        } else {
            quizDiv.innerHTML = `<h1>Quiz Completed!</h1><p>Your score is ${cnt} out of ${quizData.length}</p>`;
        }
    });

    Div.append(h1, form, btn);
    quizDiv.append(Div);
}

// Start by rendering the first question
renderQuestion(currentQuestionIndex);
