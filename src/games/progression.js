import randomNum from '../services/randomNum.js';

import game from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (start, interval, length) => {
  const arr = [];
  for (let i = 0; i <= length; i += 1) {
    arr.push(start + interval * i);
  }
  return arr;
};

const getGameConditions = () => {
  const lengthOfProgression = randomNum(6, 9);
  const progression = getProgression(randomNum(1, 10), randomNum(1, 25), lengthOfProgression);
  const hiddenIndex = randomNum(0, lengthOfProgression);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  return [question, correctAnswer];
};

const progressionGame = () => {
  game(gameDescription, getGameConditions);
};

export default progressionGame;
