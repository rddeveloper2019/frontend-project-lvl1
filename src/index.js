import checkAnswer from './services/checkAnswer.js';
import giveQuestion from './services/giveQuestion.js';
import countWins from './services/countWins.js';
import congratulations from './services/congratulations.js';

const game = (descr, userName, func) => {
  console.log(descr);

  let wins = countWins(0);
  const play = () => {
    const [exp, correctAnswer] = func();
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
export default game;
