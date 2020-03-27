export const tokenize = (input: string) => {
  return input
    .toLowerCase()
    .replace(/\n/g, ' ')
    .replace(/[.,\/#!?$%\^&\*;:{}=_`\"~()]/g, ' ')
    .replace(/\s\s+/g, ' ')
    .trim()
    .split(' ');
};
