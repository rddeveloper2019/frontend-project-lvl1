/* eslint-disable no-constant-condition */
/* eslint-disable func-names */
/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import readlineSync from 'readline-sync';
import isEvenGame from './even.js';
import expResult from './calc.js';
import greatestComDiv from './gcd.js';

const { question } = readlineSync;

export const userChoice = (name) => {
  const choosed = question(
    `Choose a game:
    1-Is the number even;
    2-Find the result of an expression;
    3-Greatest common divisor;
    5-exit 
    Your choice is - `,
  );

  const answers = [1, 2, 3, 4, 5];

  if (choosed === '5' || answers.indexOf(+choosed) < 0) {
    console.log(`Goodbye, ${name}!`);
    // eslint-disable-next-line no-useless-return
    return;
  }

  const games = [isEvenGame, expResult, greatestComDiv];

  // eslint-disable-next-line consistent-return
  games[+choosed - 1](name);
};

export const exitFromGame = (name) => {
  const selectAnswer = question(
    `Let's play some more?:
    1-Yes;
    2-No;
    Your choice is: `,
  );
  if (selectAnswer === 'no' || selectAnswer === '2') {
    console.log(`Goodbye, ${name}!`);
    // eslint-disable-next-line no-useless-return
    return;
  }
  userChoice(name);
};
export const randomNumAndAnswer = (min, max) => {
  const num = Math.floor(Math.random() * max + min);
  const correct = num % 2 === 0 ? 'yes' : 'no';
  return [num, correct];
};

const gcd = function (a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  if (b > a) { const temp = a; a = b; b = temp; }
  while (true) {
    if (b == 0) return a;
    a %= b;
    if (a == 0) return b;
    b %= a;
  }
};

export const randomExpAndAnswer = () => {
  const num1 = randomNumAndAnswer(10, 20)[0];
  const num2 = randomNumAndAnswer(1, 10)[0];
  const expressions = [`${num1} + ${num2}`, `${num1} - ${num2}`, `${num1} * ${num2}`];
  const correct = [num1 + num2, num1 - num2, num1 * num2];
  const random = Math.floor(Math.random() * expressions.length);

  return [expressions[random], correct[random]];
};

export const randomGCDAndAnswer = () => {
  const num1 = randomNumAndAnswer(10, 50)[0];
  const num2 = randomNumAndAnswer(1, 20)[0];
  const expressions = `${num1} ${num2}`;
  const correct = gcd(num1, num2);

  return [expressions, correct];
};

export const checkAnswer = (userAnswer, correctAnswer, nextStage, userName) => {
  console.log(`Your answer is: ${userAnswer}`);
  const answerStr = correctAnswer.toString();
  if (answerStr === userAnswer) {
    console.log('Correct!');

    nextStage();
  } else {
    console.log(

      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    console.log(`Let's try again, ${userName}!`);
    exitFromGame(userName);
  }
};
export const findName = () => {
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};
