import { mindreader } from '../src';

describe('mindreader', () => {
  it('works', () => {
    expect(mindreader('good bad')).toEqual({
      score: 0,
      comparative: 0,
      calculation: [{ good: 3 }, { bad: -3 }],
      tokens: ['good', 'bad'],
      words: ['good', 'bad'],
      positive: ['good'],
      negative: ['bad'],
    });
  });

  it('ignores unknown words', () => {
    expect(mindreader('hello world')).toEqual({
      score: 0,
      comparative: 0,
      calculation: [],
      tokens: ['hello', 'world'],
      words: [],
      positive: [],
      negative: [],
    });
  });
});
