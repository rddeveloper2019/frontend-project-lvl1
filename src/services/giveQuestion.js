import readlineSync from 'readline-sync';

const { question } = readlineSync;

const giveQuestion = (exp) => {
  const userSays = question(`Question: ${exp} `)
    .toLowerCase()
    .trim();

  return userSays;
};

export default giveQuestion;
