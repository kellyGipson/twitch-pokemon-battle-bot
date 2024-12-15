export const isArrayUndef = (arr: any[]) => arr.length <= 0 || !arr;
export const combineStringsWithAnd = (...strings: string[]): string => {
  let combinedString = strings.join(', ');
  const lastIndexOfComma = combinedString.lastIndexOf(',');
  if (lastIndexOfComma !== -1) {
    combinedString = combinedString.substring(0, lastIndexOfComma) +
      ' and' +
      combinedString.substring(lastIndexOfComma + 1, combinedString?.length);
  }
  return combinedString;
};
export const numberFromString = (string: string) => parseInt(string, 10);
