import readlineSync from 'readline-sync';

export const numGenerate = () => {
  const numMinRange = 5;
  const numMaxRange = 21;
  return Math.floor(Math.random() * (numMaxRange - numMinRange + 1) + numMinRange);
};

export const userName = () => {
  const questionName = readlineSync.question('May I have your name?: ');
  return questionName;
};
