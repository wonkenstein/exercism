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
    return this._processString(plain, this._findEncodedCharPos)
  }

  decode(encrypted) {
    return this._processString(plain, this._findDecodedCharPos)
  }

  _processString(str, func) {
    return str.split('').map((char, i) => {
      const charPos = this.characters.indexOf(char);
      const keyCharPos = this._findKeyCharacterPos(i);

      const processedCharPos = func(charPos, keyCharPos);

      return this.characters[processedCharPos];
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
    const i = index % this.key.length;
    const keyCharPos = this.characters.indexOf(this.key[i]);
    return keyCharPos;
  }

  _findEncodedCharPos(plainCharPos, keyCharPos) {
    const encodedCharPos = (plainCharPos + keyCharPos) % this.characters.length;
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
