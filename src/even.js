/* eslint-disable func-names */
import readlineSync from 'readline-sync';

const { question } = readlineSync;

// const userName = '';
let wins = 0;

const generateRandomNumAndCorrectAnswer = function () {
  const num = Math.floor(Math.random() * 100 + 1);
  const correct = num % 2 === 0 ? 'yes' : 'no';
  return [num, correct];
};

const isEvenGame = function (userName) {
  // userName = question('May I have your name? ');
  // console.log(`Hello, ${userName}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const giveNum = function () {
    if (wins === 3) {
      console.log(`Congratulations, ${userName}`);
      return;
    }

    wins += 1;

    const [randomNum, correctAnswer] = generateRandomNumAndCorrectAnswer();
    const userSays = question(`Question: ${randomNum} `)
      .toLowerCase()
      .trim();
    // const validated = userSays === 'yes' || userSays === 'no';

    // if (!validated) {
    //   console.log('Your answer is not valid! Write "yes" or "no"!');
    //   console.log(`Let's try again, ${userName}!`);
    //   return;
    // }

    console.log(`Your answer: ${userSays}`);

    if (correctAnswer === userSays) {
      console.log('Correct!');
      giveNum();
    } else {
      console.log(

        `'${userSays}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
    }
  };

  giveNum();
};
export default isEvenGame;
