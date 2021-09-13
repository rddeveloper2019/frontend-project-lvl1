/* eslint-disable func-names */
import readlineSync from 'readline-sync';

import { randomExpAndAnswer, checkAnswer, findName } from './index.js';

const { question } = readlineSync;

const expResult = function (user) {
  const userName = user || findName();

  console.log('What is the result of the expression?');
  let wins = 0;
  const giveQuestion = function () {
    if (wins === 3) {
      console.log(`Congratulations, ${userName}`);
      return;
    }
    console.log(wins);

    wins += 1;

    const [randomExp, correctAnswer] = randomExpAndAnswer();
    const userSays = question(`Question: ${randomExp} `)
      .toLowerCase()
      .trim();

    checkAnswer(userSays, correctAnswer, giveQuestion, userName);
  };

  giveQuestion();
};
export default expResult;
