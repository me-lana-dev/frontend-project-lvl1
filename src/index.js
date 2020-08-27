import readlineSync from 'readline-sync';

export const numGenerate = () => {
  const numMinRange = 0;
  const numMaxRange = 9;
  return Math.floor(Math.random() * (numMaxRange - numMinRange + 1) + numMinRange);
};

export const userName = () => {
  const questionName = readlineSync.question('May I have your name?: ');
  return questionName;
};

export const checkAnswer = (answer) => {
  if (answer === true) {
    return 'yes';
  }
  if (answer === false) {
    return 'no';
  }
  return answer;
};

export function runGameEngine(conditionGame, getGameData) {
  try {
    console.log('Welcome to the Brain Games!');
    const questionName = userName();
    console.log(`Hello, ${questionName}!`);
    console.log(conditionGame);
    const countQuestion = 3;
    let i = 0;
    for (i; i < countQuestion; i += 1) {
      const { taskGame, correctAnswer } = getGameData();

      console.log(`Question: ${taskGame}`);
      const userAnswer = readlineSync.question('Your answer: ');

      if (correctAnswer === userAnswer) {
        console.log('Correct!');
      } else {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${questionName}!`);
        break;
      }
    }
    if (i === countQuestion) {
      console.log(`Congratulations, ${questionName}!`);
    }
    return 0;
  } catch (e) {
    console.error(e);
    return 1;
  }
}
