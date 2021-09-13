/* eslint-disable import/no-cycle */
/* eslint-disable func-names */
import readlineSync from 'readline-sync';

// eslint-disable-next-line import/no-unresolved
import {
  isPrime, checkAnswer, findName, exitFromGame,
} from './index.js';

const { question } = readlineSync;

const primeNum = function (user) {
  const userName = user || findName();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  let wins = 0;

  const giveQuestion = function () {
    if (wins === 3) {
      console.log(`Congratulations, ${userName}`);
      wins = 0;
      exitFromGame(userName);
      return;
    }

    wins += 1;

    const [num, correctAnswer] = isPrime();
    const userSays = question(`Question: ${num}  :`)
      .toLowerCase()
      .trim();

    checkAnswer(userSays, correctAnswer, giveQuestion, userName);
  };

  giveQuestion();
};
export default primeNum;
