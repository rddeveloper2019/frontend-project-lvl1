import readlineSync from 'readline-sync';
const {question} = readlineSync;

const logic = function () {
  const userName = question('May I have your name?');
  console.log(`Hello, ${userName}`);
};

export default logic;
