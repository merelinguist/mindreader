import { negators } from './negators';

export const scoringStrategy = (
  tokens: string[],
  cursor: number,
  tokenScore: number
) => {
  if (cursor > 0) {
    const prevToken = tokens[cursor - 1];
    if (negators[prevToken]) {
      tokenScore = -tokenScore;
    }
  }
  return tokenScore;
};
