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

export const hey = (message) => {
  message = message.trim();

  let response = 'Whatever.';

  if (isSilence(message)) {
    response = 'Fine. Be that way!';
  } else {
    const shouting = isShouting(message);
    const askingQuestion = isAskingQuestion(message);

    if (shouting && askingQuestion) {
      response = "Calm down, I know what I'm doing!";
    } else if (shouting) {
      response = 'Whoa, chill out!';
    } else if (askingQuestion) {
      response = 'Sure.';
    }
  }

  return response;
};
