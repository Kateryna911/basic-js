const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }

    let depth = 1;

    for (let elem of arr) {
      let depthOfFlatArray = 1;
      depth = Math.max(depth, this.calculateDepth(elem) + depthOfFlatArray);
    }

    return depth;
  }
};
