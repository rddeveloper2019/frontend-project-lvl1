/* eslint-disable import/no-cycle */
/* eslint-disable func-names */
import readlineSync from 'readline-sync';

// eslint-disable-next-line import/no-unresolved
import {
  randomGCDAndAnswer, checkAnswer, findName,
} from './index.js';

const { question } = readlineSync;

const greatestComDiv = function (user) {
  const userName = user || findName();

  console.log('Find the greatest common divisor of given numbers.');
  let wins = 0;

  const giveQuestion = function () {
    if (wins === 3) {
      console.log(`Congratulations, ${userName}!`);
      wins = 0;

      return;
    }

    wins += 1;

    const [randomExp, correctAnswer] = randomGCDAndAnswer();
    const userSays = question(`Question: ${randomExp} `)
      .toLowerCase()
      .trim();

    checkAnswer(userSays, correctAnswer, giveQuestion, userName);
  };

  giveQuestion();
};
export default greatestComDiv;
