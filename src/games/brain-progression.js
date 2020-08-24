import readlineSync from 'readline-sync';

import { userName, numGenerate } from '../index.js';

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

export default () => {
  console.log('Welcome to the Brain Games!');
  const questionName = userName();
  console.log(`Hello, ${questionName}!`);

  console.log('What number is missing in the progression?');
  const countQuestion = 3;

  for (let i = 0; i < countQuestion; i += 1) {
    const progression = progressionGenerate();
    const indexProgression = numGenerate();

    const correctAnswer = String(progression[indexProgression]);
    const progressionDots = questionGenerate(progression, indexProgression);

    console.log(`Question: ${progressionDots}`);
    const yourAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === yourAnswer) {
      console.log('Correct!');
    } else {
      const result = `"${yourAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${questionName}!`;
      return result;
    }
  }

  return `Congratulations, ${questionName}!`;
};
