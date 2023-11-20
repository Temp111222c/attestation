export const multiplyTwoNumbers = (a, b) => a * b;
export const getMaxNumber = (a, b) => (a > b ? a : b);
export const castReversedBoolean = (value) => !value;
export const determineEntrance = (num) => {
  if (num >= 1 && num <= 20) return 1;
  if (num >= 21 && num <= 48) return 2;
  if (num >= 49 && num <= 90) return 3;
  return 0;
};
export const getSum = (num) => {
  const str = num.toString();
  let summ = 0;
  for (let i = 0; i < str.length; i += 1) {
    summ += parseInt(str[i], 10);
  }
  return summ;
};
