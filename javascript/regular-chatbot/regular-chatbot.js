// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  // throw new Error('Please implement the isValidCommand function');
  return /^chatbot/i.test(command);
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  return message.replace(/emoji(\d)+/g, "");
  // throw new Error("Please implement the removeEmoji function");
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  // throw new Error("Please implement the checkPhoneNumber function");
  const isValid = /\(\+\d{2}\) \d{3}\-\d{3}\-\d{3}/.test(number);
  if (isValid) {
    return "Thanks! You can now download me to your phone.";
  }

  return `Oops, it seems like I can't reach out to ${number}`;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  // throw new Error("Please implement the userInput function");
  const matches = userInput.match(/(\w+\.(com|so))/g);
  return matches;
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  const nameBits = fullName.split(",").map((bit) => {
    return bit.trim();
  });

  const transformed = [
    nameBits[0].replace(nameBits[0], nameBits[1]),
    nameBits[1].replace(nameBits[1], nameBits[0]),
  ];

  return `Nice to meet you, ${transformed[0]} ${transformed[1]}`;
  // throw new Error("Please implement the fullName function");
}
