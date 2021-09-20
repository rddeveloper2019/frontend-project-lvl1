import randomNum from '../services/randomNum.js';

import game from '../index.js';

const generateExpAndResult = (int1, int2, operator) => {
  const dic = {
    '+': int1 + int2,
    '-': int1 - int2,
    '*': int1 * int2,
  };
  const exp = `${int1} ${operator} ${int2}`;

  return [exp, dic[operator]];
};

const randomExpAndAnswer = () => {
  const num1 = randomNum(10, 20);
  const num2 = randomNum(1, 10);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[randomNum(0, operators.length)];

  const [expression, correct] = generateExpAndResult(num1, num2, randomOperator);
  return [expression, correct];
};

const descr = 'What is the result of the expression?';
const calcGame = () => {
  game(descr, randomExpAndAnswer);
};

export default calcGame;
