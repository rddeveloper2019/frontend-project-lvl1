import findName from './services/findName.js';
import randomNum from './services/randomNum.js';
import checkAnswer from './services/checkAnswer.js';
import giveQuestion from './services/giveQuestion.js';
import countWins from './services/countWins.js';
import congratulations from './services/congratulations.js';

const userName = findName();

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const randomGCDAndAnswer = () => {
  const num1 = randomNum(10, 50);
  const num2 = randomNum(1, 20);
  const expressions = `${num1} ${num2}`;
  const correct = gcd(num1, num2);

  return [expressions, correct];
};

const greatestComDiv = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let wins = countWins(0);
  const play = () => {
    const [exp, correctAnswer] = randomGCDAndAnswer();
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

export default greatestComDiv;
