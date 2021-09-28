import randomNum from '../services/randomNum.js';
import game from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getGameConditions = () => {
  const askedNum = randomNum(1, 100);
  const correctAnswer = isPrime(askedNum) ? 'yes' : 'no';
  return [askedNum, correctAnswer];
};

const isPrimeGame = () => {
  game(gameDescription, getGameConditions);
};

export default isPrimeGame;
