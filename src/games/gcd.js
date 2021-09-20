import randomNum from '../services/randomNum.js';

import game from '../index.js';

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

const descr = 'Find the greatest common divisor of given numbers.';
const greatestComDiv = () => {
  game(descr, randomGCDAndAnswer);
};

export default greatestComDiv;
