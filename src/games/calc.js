import randomNum from '../services/randomNum.js';

import game from '../index.js';

const gameDescription = 'What is the result of the expression?';

const generateResult = (int1, int2, operator) => {
  const dic = {
    '+': int1 + int2,
    '-': int1 - int2,
    '*': int1 * int2,
  };

  return dic[operator];
};

const getGameConditions = () => {
  const num1 = randomNum(10, 20);
  const num2 = randomNum(1, 10);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[randomNum(0, operators.length)];
  const question = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = generateResult(num1, num2, randomOperator);
  return [question, correctAnswer];
};

const calcGame = () => {
  game(gameDescription, getGameConditions);
};

export default calcGame;
