import readlineSync from 'readline-sync';

import { userName, numGenerate, checkAnswer } from '../index.js';

const checkPrime = (num) => {
  let count = 0;
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if ((num % i) === 0) {
      count += 1;
    }
  }
  if (count > 0) {
    return false;
  }
  return true;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const questionName = userName();
  console.log(`Hello, ${questionName}!`);

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const countQuestion = 3;

  for (let i = 0; i < countQuestion; i += 1) {
    const numGenerated = numGenerate();
    const isPrime = checkPrime(numGenerated);
    console.log(`Question: ${numGenerated}`);
    const questionPrime = readlineSync.question('Your answer: ', {
      trueValue: ['yes'],
      falseValue: ['no'],
    });

    if (isPrime === true && questionPrime === true) {
      console.log('Correct!');
    } else if (isPrime === false && questionPrime === false) {
      console.log('Correct!');
    } else {
      const answerWrong = checkAnswer(questionPrime);
      const answerCorrect = (isPrime) ? 'yes' : 'no';
      const result = `"${answerWrong}" is wrong answer ;(. Correct answer was "${answerCorrect}".\nLet's try again, ${questionName}!`;
      return result;
    }
  }

  return `Congratulations, ${questionName}!`;
};
