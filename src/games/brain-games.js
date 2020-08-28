import { runGameEngine } from '../index.js';
import getRandom from '../utils/get-random.js';

const checkEven = (num) => {
  if ((num % 2) === 0) {
    return 'yes';
  }
  return 'no';
};

const conditionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameData = () => {
  const numMinRange = 2;
  const numMaxRange = 100;
  const numGenerated = getRandom(numMinRange, numMaxRange);
  const correctAnswer = checkEven(numGenerated);
  const taskGame = numGenerated;
  return { taskGame, correctAnswer };
};

function runGame() {
  return runGameEngine(conditionGame, getGameData);
}

export default runGame;
