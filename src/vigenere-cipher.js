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
  constructor(val = true) {
    this.val = val;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.numAlph = {};
  }
  getObject() {
    for (let i = 0; i < this.alphabet.length; i++) {
      this.numAlph[this.alphabet[i]] = i;
    }
  }
  encrypt(text, key) {
    if (arguments.length < 2) throw new NotImplementedError('Incorrect arguments!');
    this.getObject()
    let res = ''
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (!this.alphabet.includes(text[i].toUpperCase())) {

        res += text[i]
      } else {
        res += this.alphabet[(this.numAlph[text.toUpperCase()[i]] + this.numAlph[key.toUpperCase()[count % key.toUpperCase().length]]) % this.alphabet.length];
        count +=1;
      }
    }

    if(!this.val) {
      res = res.split('').reverse().join('')
    }

    return res;
  }
  decrypt(text, key) {
    if (arguments.length < 2) throw new NotImplementedError('Incorrect arguments!');
    this.getObject()
    let res = ''
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (!this.alphabet.includes(text[i].toUpperCase())) {

        res += text[i]
      } else {
        res += this.alphabet[(this.numAlph[text.toUpperCase()[i]] - this.numAlph[key.toUpperCase()[count % key.toUpperCase().length]] + this.alphabet.length) % this.alphabet.length];
        count +=1;
      }
    }
    if(!this.val) {
      res = res.split('').reverse().join('')
    }
    return res;
  }
}

module.exports = {
  VigenereCipheringMachine
};




