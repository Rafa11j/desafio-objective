const gameLocalData = localStorage.getItem('appState');

const appState = gameLocalData === null ? {
  stage: 0,
  title: 'O prato que você pensou é massa?',
  dish1: 'Pizza',
  dish2: 'Bolo de Chocolate',
  dishQuestion1: '',
  dishReason1: '',
  dishQuestion2: '',
  dishReason2: '',
  victoryPhrase: 'Acertei de novo!',
  win: false,
} : JSON.parse(gameLocalData);