import { numGenerate, runGameEngine } from '../index.js';

const checkEven = (num) => {
  if ((num % 2) === 0) {
    return 'yes';
  }
  return 'no';
};

const conditionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const numGenerated = numGenerate();
  const correctAnswer = checkEven(numGenerated);
  const taskGame = numGenerated;
  return { taskGame, correctAnswer };
};

function runGame() {
  return runGameEngine(conditionGame, getGameData);
}

export default runGame;
