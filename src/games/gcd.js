import randomNum from '../services/randomNum.js';

import game from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGreatestCommonDivisor(b, a % b);
};

const getGameConditions = () => {
  const num1 = randomNum(10, 50);
  const num2 = randomNum(1, 20);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGreatestCommonDivisor(num1, num2);

  return [question, correctAnswer];
};

const greatestComDivGame = () => {
  game(gameDescription, getGameConditions);
};

export default greatestComDivGame;
