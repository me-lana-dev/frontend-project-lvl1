import readlineSync from 'readline-sync';

import { userName, numGenerate } from '../index.js';

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

export default () => {
  console.log('Welcome to the Brain Games!');
  const questionName = userName();
  console.log(`Hello, ${questionName}!`);

  console.log('What is the result of the expression?');
  const countQuestion = 3;

  for (let i = 0; i < countQuestion; i += 1) {
    const firstNumGenerated = numGenerate();
    const secondNumGenerated = numGenerate();
    const randomOperator = operatorGenerate();
    const resultCalculation = calculation(firstNumGenerated, randomOperator, secondNumGenerated);

    console.log(`Question: ${firstNumGenerated} ${randomOperator} ${secondNumGenerated}`);

    const questionCalc = readlineSync.question('Your answer: ');

    if (questionCalc === resultCalculation) {
      console.log('Correct!');
    } else {
      const result = `"${questionCalc}" is wrong answer ;(. Correct answer was "${resultCalculation}".\nLet's try again, ${questionName}!`;
      return result;
    }
  }

  return `Congratulations, ${questionName}!`;
};
