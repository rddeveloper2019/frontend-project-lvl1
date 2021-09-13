import { findName, userChoice } from './index.js';

// eslint-disable-next-line func-names
const start = function () {
  const userName = findName();
  userChoice(userName);
};
export default start;
