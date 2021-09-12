import readlineSync from 'readline-sync';

const { question } = readlineSync;

// eslint-disable-next-line func-names
const sayName = function () {
  const userName = question('May I have your name?');
  console.log(`Hello, ${userName}`);
};
export default sayName;
