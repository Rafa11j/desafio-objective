// Divs e Textos
const titleText = document.querySelector('h2#title');
const actionsDiv = document.querySelector('div#actions');
const dishQuestionContainer = document.querySelector('div#dish-question-container');

// Botões
const startButton = document.querySelector('button#btn-start');
const btnYes = document.querySelector('button#btn-yes');
const btnNo = document.querySelector('button#btn-no');
const btnOk = document.querySelector('button#btn-ok');
const btnCancel = document.querySelector('button#btn-cancel');

// Inputs
const inputQuestion = document.querySelector('input#dish-question');
const inputReason = document.querySelector('input#dish-reason');

startButton.addEventListener('click', (e) => {
  if (appState.stage === 3 && appState.win) {
    endGame();
  }
  else {
    startGame();
  }
});

btnYes.addEventListener('click', (e) => {
  switch (appState.stage) {
    case 1 :
    case 5 :
      isPasta();
      break;
    case 2:
    case 10:
      isDish();
      break;
    case 11:
      isNotPasta();
      break;
    default:
      break;
  }
});

btnNo.addEventListener('click', (e) => {
  switch (appState.stage) {
    case 1 :
      isNotPasta();
      break;
    case 2:
    case 5:
    case 10:
    case 11:
      isNotDish();
      break;
    default:
      break;
  }
});

btnOk.addEventListener('click', (e) => {
  if (appState.stage === 4 || appState.stage === 11) {
    if (inputQuestion.value === '') {
      alert('Preencha a informação!');
    } else {
      setDishQuestion()
    }
  } else {
    if (inputReason.value === '') {
      alert('Preencha a informação!');
    } else {
      setDishReason()
    }
  }
});

btnCancel.addEventListener('click', (e) => {
  endGame();
});