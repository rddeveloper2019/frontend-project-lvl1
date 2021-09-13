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
import progression from './progression.js';
import primeNum from './prime.js';

const { question } = readlineSync;

export const userChoice = (name) => {
  const choosed = question(
    `Choose a game:
    1 -> Checking an even number
    2 -> Calculator
    3 -> Greatest common divisor
    4 -> Arithmetic progression
    5 -> Prime number
    *** 
    6-> =Exit=
    
    Your choice is - `,
  );

  const answers = [1, 2, 3, 4, 5, 6];

  if (choosed === '6' || answers.indexOf(+choosed) < 0) {
    console.log(`Goodbye, ${name}!`);
    // eslint-disable-next-line no-useless-return
    return;
  }

  const games = [isEvenGame, expResult, greatestComDiv, progression, primeNum];

  // eslint-disable-next-line consistent-return
  games[+choosed - 1](name);
};

export const exitFromGame = (name) => {
  const selectAnswer = question(
    `Let's play some more?:
    1-Yes, play again;
    2-No, exit game;
    Your choice is: `,
  );
  if (selectAnswer === 'no' || selectAnswer === '2') {
    console.log(`Goodbye, ${name}!`);
    // eslint-disable-next-line no-useless-return
    return;
  }
  userChoice(name);
};

const randomNum = (min, max) => Math.floor(Math.random() * max + min);

export const randomNumAndAnswer = (min, max) => {
  const num = randomNum(min, max);
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
  const num1 = randomNum(10, 20);
  const num2 = randomNum(1, 10);
  const expressions = [`${num1} + ${num2}`, `${num1} - ${num2}`, `${num1} * ${num2}`];
  const correct = [num1 + num2, num1 - num2, num1 * num2];
  const random = Math.floor(Math.random() * expressions.length);

  return [expressions[random], correct[random]];
};

export const randomGCDAndAnswer = () => {
  const num1 = randomNum(10, 50);
  const num2 = randomNum(1, 20);
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
export const missingInProgression = () => {
  const add = randomNum(1, 25);
  const startNum = randomNum(1, 10);
  const randomIdx = randomNum(0, 10);

  const arr = [startNum];
  for (let i = 1; i < 10; i += 1) {
    arr.push(arr[i - 1] + add);
  }
  const answer = arr[randomIdx];
  arr[randomIdx] = '<>';

  return [arr, answer];
};

export const isPrime = () => {
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
