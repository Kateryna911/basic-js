const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainLinks: [],

  getLength() {
    return this.chainLinks.length;
  },

  addLink(value) {
    if (value === undefined) {
      this.chainLinks.push(`( )`);
    }

    this.chainLinks.push(`( ${value} )`);

    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      typeof this.chainLinks[position] == "undefined"
    ) {
      this.chainLinks = [];
      throw new Error("Error on removing wrong link!");
    }

    this.chainLinks.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainLinks.reverse();
    return this;
  },
  finishChain() {
    let chain = this.chainLinks.join("~~");
    this.chainLinks = [];
    return chain;
  },
};

module.exports = chainMaker;
