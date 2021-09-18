import findName from './services/findName.js';
import randomNum from './services/randomNum.js';
import game from './index.js';

const userName = findName();

const randomNumAndAnswer = () => {
  const num = randomNum(10, 20);
  const correct = num % 2 === 0 ? 'yes' : 'no';
  return [num, correct];
};
const descr = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEvenGame = () => {
  game(descr, userName, randomNumAndAnswer);
};

export default isEvenGame;
