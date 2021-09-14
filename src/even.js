/* eslint-disable import/no-cycle */
/* eslint-disable func-names */
import readlineSync from 'readline-sync';

import {
  randomNumAndAnswer, checkAnswer, findName,
} from './index.js';

const { question } = readlineSync;

const isEvenGame = function (user) {
  const userName = user || findName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let wins = 0;
  const giveQuestion = function () {
    if (wins === 3) {
      console.log(`Congratulations, ${userName}`);
      wins = 0;
      return;
    }

    wins += 1;

    const [randomNum, correctAnswer] = randomNumAndAnswer(10, 20);
    const userSays = question(`Question: ${randomNum} `)
      .toLowerCase()
      .trim();

    checkAnswer(userSays, correctAnswer, giveQuestion, userName);
  };

  giveQuestion();
};
export default isEvenGame;
