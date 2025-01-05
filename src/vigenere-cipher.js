const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      if (!/[A-Z]/.test(message[i])) {
        result += message[i];
        continue;
      }

      const m = this.alphabet.indexOf(message[i]);
      const k = this.alphabet.indexOf(key[keyIndex % key.length]);
      result += this.alphabet[(m + k) % 26];
      keyIndex++;
    }

    if (!this.direct) {
      result = result.split('').reverse().join('');
    }

    return result;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (!/[A-Z]/.test(encryptedMessage[i])) {
        result += encryptedMessage[i];
        continue;
      }

      const m = this.alphabet.indexOf(encryptedMessage[i]);
      const k = this.alphabet.indexOf(key[keyIndex % key.length]);
      let charIndex = m - k;
      if (charIndex < 0) charIndex += 26;
      result += this.alphabet[charIndex % 26];
      keyIndex++;
    }

    if (!this.direct) {
      result = result.split('').reverse().join('');
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
