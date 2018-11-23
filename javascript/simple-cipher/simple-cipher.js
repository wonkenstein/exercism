//
// export const Cipher = () => {
//   const generateKey = () => 'ffff';

//   const key = generateKey();

//   // return 'Hello, World!';
// };
export class Cipher {
  constructor(cipherKey) {
    this.characters = 'abcdefghijklmnopqrstuvwxyz';
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
      if (this.characters.indexOf(char) === -1) {
        throw new Error(badKey);
      }
    });

    return cipherKey;
  }


  generateKey(length) {
    const k = [];
    const random = max => Math.floor(Math.random() * Math.floor(max));

    const l = this.characters.length;
    for (let i = 0; i < length; i += 1) {
      k.push(this.characters[random(l)]);
    }

    return k.join('');
  }

  encode(plain) {
    return plain.split('').map((char, i) => {
      const charPos = this.characters.indexOf(char);
      const keyCharPos = this.characters.indexOf(this.key[i]);
      let encodedPos = keyCharPos + charPos;

      if (encodedPos > (this.characters.length - 1)) {
        encodedPos %= this.characters.length;
      }

      return this.characters[encodedPos];
      // console.log('encode', char, charPos, keyChar, keyCharPos, encodedPos, encodedChar);
      // return encodedChar;
    }).join('');

    // console.log('encode', encoded.join(''));
    // return encoded.join('');
  }

  decode(encrypted) {
    return encrypted.split('').map((char, i) => {
      const encodedPos = this.characters.indexOf(char);
      const keyCharPos = this.characters.indexOf(this.key[i]);

      let charPos = encodedPos - keyCharPos;

      // console.log('decode', shift);
      if (charPos < 0) {
        charPos = this.characters.length + charPos;
      }

      // const decodedChar = this.characters[charPos];

      // console.log('encode', char, encodedPos, keyCharPos, charPos, decodedChar);
      return this.characters[charPos];
      // return this.characters[shift];
    }).join('');
  }
}
