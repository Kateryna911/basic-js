const alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class VigenereCipheringMachine {
    encrypt(message, key) {
        message = message.toUpperCase();
        let messageCodes = [];
        let keys = key.toUpperCase();
        let j = 0;
        if (!this.algoDirection)
            message = message.split("").reverse();
        for (let i = 0; i < message.length; i++) {
            if (alph.includes(message[i])) {
                let index = ((alph.indexOf(message[i]) + alph.indexOf(keys[j])) % 26);
                let tmp = alph[index];
                messageCodes.push(tmp);
                j++;
                if (j == keys.length)
                    j = 0;
            } else
                messageCodes.push(message[i]);
        }
        return messageCodes.join("");
    }

    decrypt(message, key) {
        message = message.toUpperCase();
        let messageCodes = [];
        let keys = key.toUpperCase();
        let j = 0;
        if (!this.algoDirection)
            message = message.split("").reverse();

        for (let i = 0; i < message.length; i++) {
            if (alph.includes(message[i])) {
                let index = (((alph.indexOf(message[i]) - alph.indexOf(keys[j])) + 26) % 26);
                let tmp = alph[index];
                messageCodes.push(tmp);
                j++;
                if (j == keys.length)
                    j = 0;
            } else
                messageCodes.push(message[i]);
        }
        return messageCodes.join("");
    }
    constructor(algoDirect = true) {
        this.algoDirection = algoDirect;
        return this.algoDirection;
    }
}

module.exports = VigenereCipheringMachine;