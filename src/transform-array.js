const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("arr isn't an Array!");
  }

  const controlSequences = {
    discardNext: "--discard-next",
    discardPrev: "--discard-prev",
    doubleNext: "--double-next",
    doublePrev: "--double-prev",
  };

  let transformedArray = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case controlSequences.discardNext:
        if (i < arr.length - 1) {
          i++;
        }
        break;
      case controlSequences.discardPrev:
        if (i != 0 && arr[i - 2] != controlSequences.discardNext) {
          transformedArray.pop();
        }
        break;
      case controlSequences.doubleNext:
        if (i < arr.length - 1) {
          transformedArray.push(arr[i + 1]);
        }
        break;
      case controlSequences.doublePrev:
        if (i != 0 && arr[i - 2] != controlSequences.discardNext) {
          transformedArray.push(arr[i - 1]);
        }
        break;
      default:
        transformedArray.push(arr[i]);
    }
  }
  return transformedArray;
};
