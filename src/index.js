/* eslint-disable no-constant-condition */
/* eslint-disable func-names */
/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import readlineSync from 'readline-sync';

const { question } = readlineSync;

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
  console.log(`Your answer: ${userAnswer}`);
  const answerStr = correctAnswer.toString();
  if (answerStr === userAnswer) {
    console.log('Correct!');

    nextStage();
  } else {
    console.log(

      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    console.log(`Let's try again, ${userName}!`);
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
