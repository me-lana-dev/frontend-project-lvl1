import { runGameEngine } from '../index.js';
import getRandom from '../utils/get-random.js';

const progressionGenerate = () => {
  const result = [];
  let countProgression = 3;
  const stepProgression = 2;
  const lengthProgression = 10;
  for (let i = 0; i < lengthProgression; i += 1) {
    result[i] = countProgression + stepProgression;
    countProgression = result[i];
  }
  return result;
};

const questionGenerate = (progression, indexProgression) => {
  const tempProgression = progression;
  tempProgression[indexProgression] = '..';
  return tempProgression.join(' ');
};

const conditionGame = 'What number is missing in the progression?';

const getGameData = () => {
  const numMinRange = 0;
  const numMaxRange = 9;
  const progression = progressionGenerate();
  const indexProgression = getRandom(numMinRange, numMaxRange);
  const correctAnswer = String(progression[indexProgression]);
  const taskGame = questionGenerate(progression, indexProgression);
  return { taskGame, correctAnswer };
};

function runGame() {
  return runGameEngine(conditionGame, getGameData);
}

export default runGame;
