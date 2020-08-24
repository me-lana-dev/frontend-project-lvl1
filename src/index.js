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
