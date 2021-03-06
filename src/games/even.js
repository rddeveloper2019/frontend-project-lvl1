import randomNum from '../services/randomNum.js';
import game from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (int) => int % 2 === 0;

const getGameConditions = () => {
  const question = randomNum(10, 20);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const isEvenGame = () => {
  game(gameDescription, getGameConditions);
};

export default isEvenGame;
