export const countCharacters = (str) => {
  let counter = 0;
  for (let stringCharacters in str) {
    counter++;
  }
  return counter;
};

export const simulateSubstring = (originalString, start, end) => {
  const originalLength = countCharacters(originalString);

  let partOfString = '';
  for (i = start; i < end && i < originalLength; i++) {
    partOfString += originalString[i];
  }
  return partOfString;
};

export const doesInclude = (substring) => {
  const compareString = 'April is the cruellest month';
  const stringLength = countCharacters(compareString);
  let subIndex = 0;

  for (let character of compareString) {
    if (character === substring[subIndex]) {
      subIndex++;
      if (subIndex === stringLength) {
        return true;
      }
    } else {
      subIndex = 0;
    }
  }

  return false;
};

export const manualStartsWith = (inputString, inputSubstring) => {
  const lengthSubstring = countCharacters(inputSubstring);
  let comparativeSubstring = '';
  for (let i = 0; i < lengthSubstring; i++) {
    comparativeSubstring += inputString[i];
  }
  if (inputSubstring === comparativeSubstring) {
    return true;
  } else {
    return false;
  }
};
