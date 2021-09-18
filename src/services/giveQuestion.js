import readlineSync from 'readline-sync';

const { question } = readlineSync;

const giveQuestion = (userName, exp) => {
  const userSays = question(`Question: ${exp} `)
    .toLowerCase()
    .trim();

  return userSays;
};

export default giveQuestion;
