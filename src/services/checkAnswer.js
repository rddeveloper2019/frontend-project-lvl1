const checkAnswer = (userAnswer, correctAnswer, userName) => {
  console.log(`Your answer: ${userAnswer}`);
  const answerStr = correctAnswer.toString();
  let status = '';
  if (answerStr === userAnswer) {
    console.log('Correct!');
    status = 'correct';
  } else {
    console.log(

      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
    );
    console.log(`Let's try again, ${userName}!`);
  }

  return status;
};
export default checkAnswer;
