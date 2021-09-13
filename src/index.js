import readlineSync from 'readline-sync';

const { question } = readlineSync;
const randomNumAndAnswer = (min, max) => {
  const num = Math.floor(Math.random() * max + min);
  const correct = num % 2 === 0 ? 'yes' : 'no';
  return [num, correct];
};

const randomExpAndAnswer = () => {
  const num1 = randomNumAndAnswer(10, 20)[0];
  const num2 = randomNumAndAnswer(1, 10)[0];
  const expressions = [`${num1} + ${num2}`, `${num1} - ${num2}`, `${num1} * ${num2}`];
  const correct = [num1 + num2, num1 - num2, num1 * num2];
  const random = Math.floor(Math.random() * expressions.length);

  return [expressions[random], correct[random]];
};

const checkAnswer = (userAnswer, correctAnswer, nextStage, userName) => {
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
const findName = function () {
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

export {
  randomNumAndAnswer, checkAnswer, randomExpAndAnswer, findName,
};
