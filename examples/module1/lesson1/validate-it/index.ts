import { isEven, isInRange, validator } from './validator';

(() => {
  const input: HTMLInputElement = document.querySelector('input')!;
  const validateBtn: HTMLElement = document.querySelector('#validate-button')!;
  const cleatBtn: HTMLElement = document.querySelector('#clear-button')!;
  const result: HTMLElement = document.querySelector('#result')!;

  const validators = [isInRange, isEven];

  validateBtn.addEventListener('click', () => {
    result.innerHTML = validator(input.value, validators);
  });

  cleatBtn.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
})();
