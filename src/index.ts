import { tokenize } from './tokenize';
import { scoringStrategy } from './scoring-strategy';
import { labels } from './labels';

export const mindreader = (phrase: string) => {
  const tokens = tokenize(phrase);

  let score = 0;
  let words: string[] = [];
  let positive: string[] = [];
  let negative: string[] = [];
  let calculation: {
    [key: string]: number;
  }[] = [];

  tokens.forEach((token, i) => {
    if (!labels.hasOwnProperty(token)) return;

    words.push(token);

    let tokenScore = labels[token];

    tokenScore = scoringStrategy(tokens, i, tokenScore);

    if (tokenScore > 0) positive.push(token);
    if (tokenScore < 0) negative.push(token);
    score += tokenScore;

    calculation.push({
      [token]: tokenScore,
    });
  });

  const result = {
    score,
    comparative: tokens.length > 0 ? score / tokens.length : 0,
    calculation,
    tokens: tokens,
    words: words,
    positive: positive,
    negative: negative,
  };

  return result;
};
