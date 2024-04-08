const SCORE_CONSTANT = 1000;
export const scoreFormula = (correctAnswers: number, time: number) => {
  return Math.round((correctAnswers * SCORE_CONSTANT) / time);
}