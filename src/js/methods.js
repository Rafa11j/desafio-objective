const startGame = () => {
  appState.stage = 0;
  appState.title = appState.dish1 !== 'Pizza' ? 
  `O prato que você pensou é ${appState.dishReason1}?` : 'O prato que você pensou é massa?';
  appState.dish1 = appState.dish1 !== 'Pizza' ? appState.dish1 : 'Pizza';
  appState.dish2 = appState.dish2 !== 'Bolo de Chocolate' ? appState.dish2 : 'Bolo de Chocolate';
  appState.victoryPhrase = 'Acertei de novo!';
  appState.dishQuestion1 = '';
  appState.dishQuestion2 = '';
  appState.win = false;

  localStorage.setItem('appState', JSON.stringify(appState));
  
  titleText.innerHTML = appState.title;
  appState.stage = 1;
  actionsDiv.className = 'actions';
  dishQuestionContainer.className = 'no-actions'; 
  startButton.className = 'no-actions';
  inputReason.className = 'no-actions';
  inputQuestion.className = 'no-actions';
  inputReason.value = '';
};

const endGame = () => {
  appState.stage = 0;
  appState.title = 'Pense em um prato que gosta';
  titleText.innerHTML = appState.title;
  dishQuestionContainer.className = 'no-actions'; 
  startButton.className = 'default-button';
  inputReason.className = 'no-actions';
  inputQuestion.className = 'no-actions';
};

const isPasta = () => {
  appState.title = `O prato que você pensou é ${appState.dish1}?`;
  appState.stage = 2;
  titleText.innerHTML = appState.title;
};

const isDish = () => {
  appState.title = appState.victoryPhrase;
  appState.stage = 3;
  appState.win = true;
  titleText.innerHTML = appState.title;

  actionsDiv.className = 'no-actions';
  startButton.className = 'default-button';
};

const setDishQuestion = () => {
  if (appState.stage === 11) {
    appState.dishQuestion2 = inputQuestion.value;
    appState.stage = 12;
    appState.title = `${appState.dishQuestion2} é ____________ mas ${appState.dish2} não.`;
    appState.dish2 = appState.dishQuestion2;
  } else {
    appState.dishQuestion1 = inputQuestion.value;
    appState.stage = 4;
    appState.title = `${appState.dishQuestion1} é ____________ mas ${appState.dish1} não.`;
    appState.dish1 = appState.dishQuestion1;
  }
  
  titleText.innerHTML = appState.title;
  inputQuestion.className = 'no-actions';
  inputReason.className = 'show';
  inputQuestion.value = '';
};

const setDishReason = () => {
  if (appState.stage === 12) {
    appState.dishReason2 = inputReason.value;
  } else {
    appState.dishReason1 = inputReason.value;
  }
  endGame();
};

const isNotPasta = () => {
  if (appState.dishReason2 !== '' && appState.stage === 1) {
    appState.title = appState.dish2 !== 'Bolo de Chocolate' ? 
    `O prato que você pensou é ${appState.dishReason2}?` : 'O prato que você pensou é Bolo de Chocolate?';
    appState.stage = 11;
  } else {
    appState.title = `O prato que você pensou é ${appState.dish2}?`;
    appState.stage = 10;
  }
  titleText.innerHTML = appState.title;
};

const isNotDish = () => {
  if (appState.stage === 10) {
    appState.stage = 11;
  } else {
    appState.stage = 3;
  }
  appState.title = 'Qual prato você pensou?';
  titleText.innerHTML = appState.title;

  actionsDiv.className = 'no-actions';
  dishQuestionContainer.className = 'show';
  inputQuestion.className = 'show';
};
