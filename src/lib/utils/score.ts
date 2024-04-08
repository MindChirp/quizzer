const SCORE_CONSTANT = 1000;
export const scoreFormula = (correctAnswers: number, time: number) => {
  return (correctAnswers * SCORE_CONSTANT) / time;
}