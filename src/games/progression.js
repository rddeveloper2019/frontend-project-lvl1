import randomNum from '../services/randomNum.js';

import game from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const generateArray = (start, interval) => {
  const arr = [start];
  for (let i = 1; i < 10; i += 1) {
    arr.push(arr[i - 1] + interval);
  }
  return arr;
};

const getGameConditions = () => {
  const randomIdx = randomNum(0, 10);
  const randomArray = generateArray(randomNum(1, 10), randomNum(1, 25));
  const correctAnswer = randomArray[randomIdx];
  randomArray[randomIdx] = '..';

  const question = randomArray.join(' ');
  return [question, correctAnswer];
};

const progressionGame = () => {
  game(gameDescription, getGameConditions);
};

export default progressionGame;
