![](/docs/banner.png)

Super simple sentiment analysis with AFINN.

## Usage

```sh
npm i styled-preflight
```

```sh
yarn add styled-preflight
```

```js
import { mindreader } from 'mindreader';

const sentiment = mindreader('good, bad');

console.log(sentiment);

/*
{
  score: -3,
  comparative: -1,
  calculation: [{ ugly: -3 }, { bad: -3 }, { good: 3 }],
  tokens: ['good', 'bad', 'ugly'],
  words: ['ugly', 'bad', 'good],
  positive: ['good']
  negative: ['ugly', 'bad']
}
*/
```

## Input & Ouput

`mindreader` takes any `string` input, for example:

```js
import { mindreader } from 'mindreader';

const sentiment = mindreader(
  'It was the best of times, it was the worst of times...'
);

...
```

The full output looks like this:

| Name            | Type                          | Description                                                                                                                                                                                                                                                            |
| --------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **score**       | `number`                      | The overall sentiment score. Essentially just the sentiment ratings of each token, added up.                                                                                                                                                                           |
| **comparative** | `number`                      | If you want to compare several strings, use this. It calculates the average score of all the tokens in your provided string.                                                                                                                                           |
| **calculation** | `{ [key: string]: number }[]` | How did we get here? This outputs the score which was assigned to each individual token in the string. If you want to do word-by-word sentiment analysis, passing in a big string to `mindreader`, and then reading from `caluclation` is the fastest way of doing it. |
| **tokens**      | `string[]`                    | A list of the words in your string.                                                                                                                                                                                                                                    |
| **words**       | `string[]`                    | All the words which `mindreader` actually scanned. Some stopwords, like “the”, or rarer words will not be included here.                                                                                                                                               |
| **positive**    | `number`                      | A list of the `positive` marked words (those scored above `0`.)                                                                                                                                                                                                        |
| **negative**    | `number`                      | A list of the `positive` marked words (those scored below `0`.)                                                                                                                                                                                                        |

## Prior art

- https://github.com/thisandagain/sentiment
