import { question } from 'readline-sync';

const game = (gameCondition, gameFunction) => {
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(gameCondition);

  for (let i = 3; i > 0; i -= 1) {
    const [expression, correctAnswer] = gameFunction();
    const usersAnswer = question(`Question: ${expression} `);

    if (usersAnswer === correctAnswer.toString()) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      console.log(
        `'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      i = 0;
    }
  }
};

export default game;
