import readlineSync from 'readline-sync';

import { userName, numGenerate } from '../index.js';

const checkEven = (num) => {
  if ((num % 2) === 0) {
    return true;
  }
  return false;
};

const checkAnswer = (answer) => {
  if (answer === true) {
    return 'yes';
  }
  if (answer === false) {
    return 'no';
  }
  return answer;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const questionName = userName();
  console.log(`Hello, ${questionName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const countQuestion = 3;

  for (let i = 0; i < countQuestion; i += 1) {
    const numGenerated = numGenerate();
    const isEven = checkEven(numGenerated);
    console.log(`Question: ${numGenerated}`);
    const questionEven = readlineSync.question('Your answer: ', {
      trueValue: ['yes'],
      falseValue: ['no'],
    });

    if (isEven === true && questionEven === true) {
      console.log('Correct!');
    } else if (isEven === false && questionEven === false) {
      console.log('Correct!');
    } else {
      const answerWrong = checkAnswer(questionEven);
      const answerCorrect = (isEven) ? 'yes' : 'no';
      const result = `"${answerWrong}" is wrong answer ;(. Correct answer was "${answerCorrect}".\nLet's try again, ${questionName}!`;
      return result;
    }
  }

  return `Congratulations, ${questionName}!`;
};
