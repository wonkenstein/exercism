/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isSilence = (message) => {
  const isWhiteSpace = /^\s+$/;
  return (message === '' || isWhiteSpace.test(message));
};

const isShouting = (message) => {
  const toUpperCase = message.toUpperCase();
  const hasAlpha = /[A-Za-z]/;
  return (hasAlpha.test(message) && message === toUpperCase);
};

const isAskingQuestion = (message) => {
  const question = /\?$/;
  return question.test(message);
};

const typeOfMessage = (message) => {
  const flags = [
    isAskingQuestion(message), // 4
    isShouting(message), // 2
    isSilence(message), // 1
  ].map((item) => {
    return (item === true) ? 1 : 0;
  }).join('');

  return parseInt(flags, 2);
};

export const hey = (message) => {
  message = message.trim();

  const messageResponse = typeOfMessage(message);

  switch (messageResponse) {
    case (1):
      return 'Fine. Be that way!';
    case (2):
      return 'Whoa, chill out!';
    case (4):
      return 'Sure.';
    case (6):
      return "Calm down, I know what I'm doing!";
    default:
      return 'Whatever.';
  }
};
