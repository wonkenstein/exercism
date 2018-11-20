//
// export const Cipher = () => {
//   const generateKey = () => 'ffff';

//   const key = generateKey();

//   // return 'Hello, World!';
// };
export class Cipher {
  constructor(cipherKey) {
    this.keyChars = 'abcdefghijklmnopqrstuvwxyz';
    this.keyLength = 100;

    if (cipherKey !== undefined) {
      this.key = this.validateCipherKey(cipherKey);
    } else {
      this.key = this.generateKey(this.keyLength);
    }
  }

  validateCipherKey(cipherKey) {
    const badKey = 'Bad key';
    if (cipherKey === '') {
      throw new Error(badKey);
    }

    cipherKey.split('').forEach((char) => {
      if (this.keyChars.indexOf(char) === -1) {
        throw new Error(badKey);
      }
    });

    return cipherKey;
  }

  generateKey(length) {
    const k = [];
    const random = max => Math.floor(Math.random() * Math.floor(max));

    const l = this.keyChars.length;
    for (let i = 0; i < length; i += 1) {
      k.push(this.keyChars[random(l)]);
    }

    return k.join('');
  }

  encode() {

  }

  decode() {

  }
}
