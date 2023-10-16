//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const removeQuotes = (word) => {
  return word.replace(/^'/, "").replace(/'$/, "");
};

const cleanInput = (input) => {
  const regex = /,|\n|[^a-zA-Z 0-9']/gi;
  return input.replace(regex, " ").toLowerCase();
};

const splitIntoWords = (input) => {
  return input
    .split(" ")
    .filter((word) => word !== "")
    .map((word) => removeQuotes(word));
};

export const countWords = (input) => {
  const cleaned = cleanInput(input);
  const words = splitIntoWords(cleaned);

  const results = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (results[word] === undefined) {
      results[word] = 1;
    } else {
      results[word]++;
    }
  }

  return results;
};
