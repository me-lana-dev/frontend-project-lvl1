import { numGenerate, runGameEngine } from '../index.js';

const checkPrime = (num) => {
  let count = 0;
  if (num < 2) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if ((num % i) === 0) {
      count += 1;
    }
  }
  if (count > 0) {
    return 'no';
  }
  return 'yes';
};

const conditionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const numGenerated = numGenerate();
  const correctAnswer = checkPrime(numGenerated);
  const taskGame = numGenerated;
  return { taskGame, correctAnswer };
};

function runGame() {
  return runGameEngine(conditionGame, getGameData);
}

export default runGame;
