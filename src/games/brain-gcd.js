import { runGameEngine } from '../index.js';
import getRandom from '../utils/get-random.js';

const questionGcd = (numFirst, numSecond) => {
  const count = (numFirst >= numSecond) ? numFirst : numSecond;
  let gcd = 1;
  for (let i = 1; i <= count; i += 1) {
    if ((numFirst % i === 0) && (numSecond % i) === 0) {
      gcd = i;
    }
  }
  return String(gcd);
};

const conditionGame = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const numMinRange = 3;
  const numMaxRange = 15;
  const firstNumGenerated = getRandom(numMinRange, numMaxRange);
  const secondNumGenerated = getRandom(numMinRange, numMaxRange);
  const correctAnswer = questionGcd(firstNumGenerated, secondNumGenerated);
  const taskGame = `${firstNumGenerated} ${secondNumGenerated}`;
  return { taskGame, correctAnswer };
};

function runGame() {
  return runGameEngine(conditionGame, getGameData);
}

export default runGame;
