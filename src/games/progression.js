import randomNum from '../services/randomNum.js';

import game from '../index.js';

const descr = 'What number is missing in the progression?';

const generateArray = (start, interval, randomIdx) => {
  const arr = [start];
  for (let i = 1; i < 10; i += 1) {
    arr.push(arr[i - 1] + interval);
  }
  const answer = arr[randomIdx];
  arr[randomIdx] = '..';
  return [arr.join(' '), answer];
};

const missingInProgression = () => {
  const interval = randomNum(1, 25);
  const startNum = randomNum(1, 10);
  const randomIdx = randomNum(0, 10);

  return generateArray(startNum, interval, randomIdx);
};

const progression = () => {
  game(descr, missingInProgression);
};

export default progression;
