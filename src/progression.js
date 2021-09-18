import findName from './services/findName.js';
import randomNum from './services/randomNum.js';
import checkAnswer from './services/checkAnswer.js';
import giveQuestion from './services/giveQuestion.js';
import countWins from './services/countWins.js';
import congratulations from './services/congratulations.js';

const userName = findName();

const missingInProgression = () => {
  const add = randomNum(1, 25);
  const startNum = randomNum(1, 10);
  const randomIdx = randomNum(0, 10);

  const arr = [startNum];
  for (let i = 1; i < 10; i += 1) {
    arr.push(arr[i - 1] + add);
  }
  const answer = arr[randomIdx];
  arr[randomIdx] = '..';

  return [arr.join(' '), answer];
};

const progression = () => {
  console.log('What number is missing in the progression?');
  let wins = countWins(0);
  const play = () => {
    const [exp, correctAnswer] = missingInProgression();
    const userSays = giveQuestion(exp);
    const result = checkAnswer(userSays, correctAnswer, userName);

    if (result === 'correct') {
      wins = countWins(1);
      if (wins < 3) {
        play();
      } else {
        congratulations(userName);
      }
    }
  };
  play();
};

export default progression;
