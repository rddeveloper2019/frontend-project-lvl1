/* eslint-disable import/no-cycle */
/* eslint-disable func-names */
import readlineSync from 'readline-sync';

// eslint-disable-next-line import/no-unresolved
import {
  missingInProgression, checkAnswer, findName,
} from './index.js';

const { question } = readlineSync;

const progression = function (user) {
  const userName = user || findName();

  console.log('What number is missing in the progression?');
  let wins = 0;

  const giveQuestion = function () {
    if (wins === 3) {
      console.log(`Congratulations, ${userName}!`);
      wins = 0;
      return;
    }

    wins += 1;

    const [arr, correctAnswer] = missingInProgression();
    const userSays = question(`Question: ${arr}  :`)
      .toLowerCase()
      .trim();

    checkAnswer(userSays, correctAnswer, giveQuestion, userName);
  };

  giveQuestion();
};
export default progression;
