import readlineSync from 'readline-sync';

const { question } = readlineSync;

const game = (descr, func) => {
  console.log('Welcome to the Brain Games!');
  const userName = question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(descr);

  let gameLevels = 3;

  const play = () => {
    const [exp, correctAnswer] = func();
    const userSays = question(`Question: ${exp} `)
      .toLowerCase()
      .trim();

    if (userSays === correctAnswer.toString()) {
      console.log(`Congratulations, ${userName}!`);
      gameLevels -= 1;
    } else {
      console.log(
        `'${userSays}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      gameLevels = 0;
    }
  };

  while (gameLevels) {
    play();
  }
};

export default game;
