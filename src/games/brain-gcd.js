import readlineSync from 'readline-sync';

import { userName, numGenerate } from '../index.js';

const questionGcd = (numFirst, numSecond) => {
  const count = (numFirst >= numSecond) ? numFirst : numSecond;
  let gcd = 1;
  for (let i = 1; i <= count; i += 1) {
    if ((numFirst % i === 0) && (numSecond % i) === 0) {
      gcd = i;
    }
  }
  console.log(gcd);
  return String(gcd);
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const questionName = userName();
  console.log(`Hello, ${questionName}!`);

  console.log('Find the greatest common divisor of given numbers.');
  const countQuestion = 3;

  for (let i = 0; i < countQuestion; i += 1) {
    const firstNumGenerated = numGenerate();
    const secondNumGenerated = numGenerate();
    const numGcd = questionGcd(firstNumGenerated, secondNumGenerated);

    console.log(`Question: ${firstNumGenerated} ${secondNumGenerated}`);
    const questionCalc = readlineSync.question('Your answer: ');

    if (questionCalc === numGcd) {
      console.log('Correct!');
    } else {
      const result = `"${questionCalc}" is wrong answer ;(. Correct answer was "${numGcd}".\nLet's try again, ${questionName}!`;
      return result;
    }
  }

  return `Congratulations, ${questionName}!`;
};
