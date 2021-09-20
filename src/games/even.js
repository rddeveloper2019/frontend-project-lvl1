import randomNum from '../services/randomNum.js';
import game from '../index.js';

const descr = 'Answer "yes" if the number is even, otherwise answer "no".';

const randomNumAndAnswer = () => {
  const num = randomNum(10, 20);
  const isEven = num % 2 === 0;
  const correct = isEven ? 'yes' : 'no';
  return [num, correct];
};

const isEvenGame = () => {
  game(descr, randomNumAndAnswer);
};

export default isEvenGame;
