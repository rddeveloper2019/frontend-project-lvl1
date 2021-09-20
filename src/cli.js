import readlineSync from 'readline-sync';

const { question } = readlineSync;

const intro = () => {
  console.log('Welcome to the Brain Games!');
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
export default intro;
