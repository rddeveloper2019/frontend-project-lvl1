import findName from './services/findName.js';
import randomNum from './services/randomNum.js';
import checkAnswer from './services/checkAnswer.js';
import giveQuestion from './services/giveQuestion.js';
import countWins from './services/countWins.js';
import congratulations from './services/congratulations.js';

const userName = findName();

const randomExpAndAnswer = () => {
  const num1 = randomNum(10, 20);
  const num2 = randomNum(1, 10);
  const expressions = [`${num1} + ${num2}`, `${num1} - ${num2}`, `${num1} * ${num2}`];
  const correct = [num1 + num2, num1 - num2, num1 * num2];
  const random = Math.floor(Math.random() * expressions.length);

  return [expressions[random], correct[random]];
};

const calcGame = () => {
  console.log('What is the result of the expression?');
  let wins = countWins(0);
  const play = () => {
    const [exp, correctAnswer] = randomExpAndAnswer(10, 20);
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

export default calcGame;
