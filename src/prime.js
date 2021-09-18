import findName from './services/findName.js';
import randomNum from './services/randomNum.js';
import checkAnswer from './services/checkAnswer.js';
import giveQuestion from './services/giveQuestion.js';
import countWins from './services/countWins.js';
import congratulations from './services/congratulations.js';

const userName = findName();

const isPrime = () => {
  const random = randomNum(1, 100);

  const checkPrime = (num) => {
    for (let i = num - 1; i > 1; i -= 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const correct = checkPrime(random);

  return [random, correct];
};

const primeNum = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let wins = countWins(0);
  const play = () => {
    const [exp, correctAnswer] = isPrime();
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

export default primeNum;
