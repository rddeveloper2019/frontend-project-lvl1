import findName from './services/findName.js';
import randomNum from './services/randomNum.js';
import checkAnswer from './services/checkAnswer.js';
import giveQuestion from './services/giveQuestion.js';
import countWins from './services/countWins.js';
import congratulations from './services/congratulations.js';

const userName = findName();

const randomNumAndAnswer = (min, max) => {
  const num = randomNum(min, max);
  const correct = num % 2 === 0 ? 'yes' : 'no';
  return [num, correct];
};

const isEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let wins = countWins(0);
  const play = () => {
    const [exp, correctAnswer] = randomNumAndAnswer(10, 20);
    const userSays = giveQuestion(userName, exp, wins);
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

export default isEvenGame;
