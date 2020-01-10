export const requiredInput = (input) => {
  return input ? undefined : `This Field could be required`;
};

export const correctEmail = (input) => {
  return input.includes('@') ? undefined : 'Email address could contains: @';
};

export const matchInput = (input, allInputs) => {
  return input === allInputs.password ? undefined : 'Password could be match';
};

export const passwordLength = (input) => {
  return input.length >= 6 ? undefined : 'Password could be longer';
};
