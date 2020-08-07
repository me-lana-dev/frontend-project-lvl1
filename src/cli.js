import readlineSync from 'readline-sync';

export default () => {
	const question = readlineSync.question('May I have your name?: ');
	return `Hello, ${question}!`;
}