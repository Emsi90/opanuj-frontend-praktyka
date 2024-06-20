const MIN_RANGE = 1;
const MAX_RANGE = 100;

export const VALID = 'Success, number is valid.';
const NOT_A_NUMBER = 'The given value is not a number!';
const NOT_EVEN = 'The given value is not even!';
const NOT_IN_RANGE = `The given value is not in the range: ${MIN_RANGE}-${MAX_RANGE}!`;

export type Validator = (value: number) => {
  isValid: boolean;
  message: string;
};

export const isNumber = (value: string | number) => ({
  isValid: value != '' && Number.isInteger(Number(value)),
  message: NOT_A_NUMBER,
});
export const isEven = (value: number) => ({
  isValid: value % 2 === 0,
  message: NOT_EVEN,
});
export const isInRange = (value: number) => ({
  isValid: MIN_RANGE <= value && MAX_RANGE >= value,
  message: NOT_IN_RANGE,
});
