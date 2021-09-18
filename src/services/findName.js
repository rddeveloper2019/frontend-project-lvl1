import readlineSync from 'readline-sync';

const { question } = readlineSync;

const findName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};
export default findName;
