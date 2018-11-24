//
export class Cipher {
  constructor(cipherKey) {
    this.characters = 'abcdefghijklmnopqrstuvwxyz';
    this.keyLength = 100;

    if (cipherKey === undefined) {
      this.key = this._generateKey(this.keyLength);
    } else {
      this.key = this._validateCipherKey(cipherKey);
    }
  }

  encode(plain) {
    return plain.split('').map((char, i) => {
      const plainCharPos = this.characters.indexOf(char);
      const keyCharPos = this._findKeyCharacterPos(i);

      const encodedCharPos = this._findEncodedCharPos(plainCharPos, keyCharPos);

      return this.characters[encodedCharPos];
    }).join('');
  }

  decode(encrypted) {
    return encrypted.split('').map((char, i) => {
      const encodedCharPos = this.characters.indexOf(char);
      const keyCharPos = this._findKeyCharacterPos(i);

      const plainCharPos = this._findDecodedCharPos(encodedCharPos, keyCharPos);

      return this.characters[plainCharPos];
    }).join('');
  }

  _validateCipherKey(cipherKey) {
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

  _generateKey(length) {
    const k = [];
    const random = max => Math.floor(Math.random() * Math.floor(max));

    const l = this.characters.length;
    for (let i = 0; i < length; i += 1) {
      k.push(this.characters[random(l)]);
    }

    return k.join('');
  }

  _findKeyCharacterPos(index) {
    let i = index;
    if (i > (this.key.length - 1)) {
      i %= this.key.length;
    }

    const keyCharPos = this.characters.indexOf(this.key[i]);
    return keyCharPos;
  }

  _findEncodedCharPos(plainCharPos, keyCharPos) {
    let encodedCharPos = keyCharPos + plainCharPos;
    if (encodedCharPos > (this.characters.length - 1)) {
      encodedCharPos %= this.characters.length;
    }
    return encodedCharPos;
  }

  _findDecodedCharPos(encodedCharPos, keyCharPos) {
    let plainCharPos = encodedCharPos - keyCharPos;
    if (plainCharPos < 0) {
      plainCharPos = this.characters.length + plainCharPos;
    }
    return plainCharPos;
  }
}
