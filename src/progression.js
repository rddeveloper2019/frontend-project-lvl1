import findName from './services/findName.js';
import randomNum from './services/randomNum.js';

import game from './index.js';

const userName = findName();

const missingInProgression = () => {
  const add = randomNum(1, 25);
  const startNum = randomNum(1, 10);
  const randomIdx = randomNum(0, 10);

  const arr = [startNum];
  for (let i = 1; i < 10; i += 1) {
    arr.push(arr[i - 1] + add);
  }
  const answer = arr[randomIdx];
  arr[randomIdx] = '..';

  return [arr.join(' '), answer];
};
const descr = 'What number is missing in the progression?';
const progression = () => {
  game(descr, userName, missingInProgression);
};

export default progression;
