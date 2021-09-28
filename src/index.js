import { question } from 'readline-sync';

const game = (gameCondition, gameFunction) => {
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(gameCondition);

  let gameLevel = 0;

  while (gameLevel <= 3) {
    if (gameLevel === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const [expression, correctAnswer] = gameFunction();
    const usersAnswer = question(`Question: ${expression} `);
    console.log(`Your answer: ${usersAnswer}`);

    if (usersAnswer === correctAnswer.toString()) {
      console.log('Correct!');
      gameLevel += 1;
    } else {
      console.log(
        `'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
};

export default game;
