import readlineSync from 'readline-sync';
import isEvenGame from './even.js';

const { question } = readlineSync;

// eslint-disable-next-line func-names
const sayName = function () {
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  const userChoice = question(
    `Choose a game:
    1-is even? 
    5-exit 
    Your choice is - `,
  );

  if (userChoice === '5') {
    return;
  }

  const games = {
    1: isEvenGame(userName),
  };

  // eslint-disable-next-line consistent-return
  return games[userChoice];
};
export default sayName;
