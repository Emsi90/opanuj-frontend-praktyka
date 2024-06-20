import { VALID, Validator, isNumber } from './validators';

export const validator = (input: string, validators: Validator[]) => {
  const isValidNumber = isNumber(input);
  if (!isValidNumber.isValid) {
    return isValidNumber.message;
  }
  return (
    validators
      .map((validatorFn) => validatorFn(Number(input)))
      .find((validator) => !validator.isValid)?.message || VALID
  );
};
