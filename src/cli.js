import readlineSync from 'readline-sync';
import isEvenGame from './even.js';
import expResult from './calc.js';
import { findName } from './index.js';

const { question } = readlineSync;

// eslint-disable-next-line func-names
const start = function () {
  const userName = findName();
  // console.log(`Hello, ${userName}`);
  const userChoice = question(
    `Choose a game:
    1-is even?
    2-result of the expression 
    5-exit 
    Your choice is - `,
  );

  if (userChoice === '5') {
    return;
  }

  const games = [isEvenGame, expResult];

  // eslint-disable-next-line consistent-return
  games[+userChoice - 1](userName);
};
export default start;
