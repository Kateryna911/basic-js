const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    this.codeOfA = this.alphabet[0].charCodeAt();
  }

  encrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error("Message or key not specified");
    }

    message = message.toUpperCase().split("");
    key = key.toUpperCase();

    let count = 0;

    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        message[i] = String.fromCharCode(
          ((message[i].charCodeAt() + key[count % key.length].charCodeAt()) %
            this.alphabet.length) +
            this.codeOfA
        );
        count++;
      }
    }

    return this.type === false ? message.reverse().join("") : message.join("");
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage == undefined || key == undefined) {
      throw new Error("Encrypted message or key not specified");
    }

    encryptedMessage = encryptedMessage.toUpperCase().split("");
    key = key.toUpperCase();

    let count = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (this.alphabet.includes(encryptedMessage[i])) {
        encryptedMessage[i] = String.fromCharCode(
          ((encryptedMessage[i].charCodeAt() +
            this.alphabet.length -
            key[count % key.length].charCodeAt()) %
            this.alphabet.length) +
            this.codeOfA
        );
        count++;
      }
    }

    return this.type === false
      ? encryptedMessage.reverse().join("")
      : encryptedMessage.join("");
  }
}

module.exports = VigenereCipheringMachine;
