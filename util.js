function generateText(name, age) {
  // Returns output text
  return `${name} (${age} years old)`;
};

function createElement(type, text, className) {
  // Creates a new HTML element and returns it
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

function validateInput(text, notEmpty, isNumber) {
  // Validate user input with two pre-defined rules
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  if (isNumber && +text === NaN) {
    return false;
  }
  return true;
};

function checkAndGenerate(name, age) { 
  if (
    !validateInput(name, true, false) ||
    !validateInput(age, false, true)
  ) {
    return false;
  }

  return generateText(name, age);
};

// TODO: move this into a module and then just export that module only.
exports.generateText = generateText;
exports.createElement = createElement;
exports.validateInput = validateInput;
exports.checkAndGenerate = checkAndGenerate;
