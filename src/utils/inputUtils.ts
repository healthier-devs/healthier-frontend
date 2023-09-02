export const validateNumber = (input: string) => {
  const parsedNumber = parseInt(input);

  if (isNaN(parsedNumber) || parsedNumber <= 0) {
    return 0;
  }

  return parsedNumber;
};

export const handleFocusInput = (index: number, refs: Array<React.RefObject<HTMLInputElement>>) => {
  if (refs[index + 1] && index < refs.length - 1) {
    refs[index + 1].current?.focus();
  }
  if (index === refs.length - 1) {
    refs[index].current?.blur();
  }
};

export const makeYears = () =>
  Array.from(Array(100).keys())
    .map((y) => `${y + 1924}년`)
    .reverse();

export const makeDates = (end: number) => Array.from(Array(end).keys()).map((d) => `${d + 1}일`);

export const validateEmail = (input: string) => {
  if (input.length === 0) {
    return true;
  }

  return new RegExp(
    /^((?:[A-Za-z0-9!#$%&'*+\-/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/gm
  ).test(input);
};
