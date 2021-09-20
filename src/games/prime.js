import randomNum from '../services/randomNum.js';
import game from '../index.js';

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
const descr = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const primeNum = () => {
  game(descr, isPrime);
};

export default primeNum;
