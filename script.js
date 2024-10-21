document.addEventListener("DOMContentLoaded", function () {
  const questionElement = document.querySelector('#question');
  const answerInput = document.querySelector('#answer');
  const resultElement = document.querySelector('#result');
  const buttonRespond = document.querySelector('#respond');
  const buttonNewQuestion = document.querySelector('#new-question');

  let num1 = 0, num2 = 0, operation = '', correctAnswer = 0;

  function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-'];
    operation = operations[Math.floor(Math.random() * operations.length)];

    if (operation === '+') {
      correctAnswer = num1 + num2;
    } else if (operation === '-') {
      correctAnswer = num1 - num2;
    }

    questionElement.textContent = `¿Cuánto es ${num1} ${operation} ${num2}?`;
  }

  function checkAnswer() {
    const userAnswer = parseInt(answerInput.value, 10);
    if (isNaN(userAnswer)) {
      resultElement.textContent = 'Por favor, ingresa un número.';
      resultElement.style.color = 'red';
    } else if (userAnswer === correctAnswer) {
      resultElement.textContent = '¡Correcto!';
      resultElement.style.color = 'green';
    } else {
      resultElement.textContent = `Incorrecto. La respuesta correcta era ${correctAnswer}.`;
      resultElement.style.color = 'red';
    }

    generateQuestion();
    answerInput.value = '';
    answerInput.focus();
  }

  buttonRespond.addEventListener('click', checkAnswer);
  buttonNewQuestion.addEventListener('click', generateQuestion);

  generateQuestion();
});
