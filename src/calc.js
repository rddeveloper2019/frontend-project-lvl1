import findName from './services/findName.js';
import randomNum from './services/randomNum.js';

import game from './index.js';

const userName = findName();

const randomExpAndAnswer = () => {
  const num1 = randomNum(10, 20);
  const num2 = randomNum(1, 10);
  const expressions = [`${num1} + ${num2}`, `${num1} - ${num2}`, `${num1} * ${num2}`];
  const correct = [num1 + num2, num1 - num2, num1 * num2];
  const random = Math.floor(Math.random() * expressions.length);

  return [expressions[random], correct[random]];
};
const descr = 'What is the result of the expression?';
const calcGame = () => {
  game(descr, userName, randomExpAndAnswer);
};

export default calcGame;
