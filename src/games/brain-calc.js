import { numGenerate, runGameEngine } from '../index.js';

const operatorGenerate = () => {
  const setOperators = '+*-';
  const randomIndex = Math.floor(Math.random() * setOperators.length);
  const randomOperator = setOperators[randomIndex];
  return randomOperator;
};

const calculation = (numFirst, operator, numSecond) => {
  let result = '';
  switch (operator) {
    case '+':
      result = Number(numFirst) + Number(numSecond);
      break;
    case '-':
      result = Number(numFirst) - Number(numSecond);
      break;
    default:
      result = Number(numFirst) * Number(numSecond);
  }
  return String(result);
};

const conditionGame = 'What is the result of the expression?';

const getGameData = () => {
  const firstNumGenerated = numGenerate();
  const secondNumGenerated = numGenerate();
  const randomOperator = operatorGenerate();
  const correctAnswer = calculation(firstNumGenerated, randomOperator, secondNumGenerated);
  const taskGame = `${firstNumGenerated} ${randomOperator} ${secondNumGenerated}`;
  return { taskGame, correctAnswer };
};

function runGame() {
  return runGameEngine(conditionGame, getGameData);
}

export default runGame;
