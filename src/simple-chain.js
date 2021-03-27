const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        const strVal = `( ${value} )`;
        this.chain.push(strVal);
        return this;
    },
    removeLink(position) {
        if (!isFinite(position) || (position ^ 0) !== position || this.chain.length < position || position < 1) {
            this.chain = [];
            throw new Error();
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        const result = this.chain.join('~~');
        this.chain = [];
        return result;
    }
};

module.exports = chainMaker;