const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  
  if (options.repeatTimes == undefined) {
    options.repeatTimes = 1;
  }
  
  if (!options.hasOwnProperty("separator")) {
    options.separator = "+";
  }

  if (!options.hasOwnProperty("addition")) {
    options.addition = "";
  }
  String(options.addition);

  if (options.additionRepeatTimes == undefined) {
    options.additionRepeatTimes = 1;
  }

  if (!options.hasOwnProperty("additionSeparator")) {
    options.additionSeparator = "|";
  }

  let resultString = "";

  for (let i = 0; i < options.repeatTimes; i++) {
    resultString += str;
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      resultString += options.addition;
      if (j < options.additionRepeatTimes - 1) {
        resultString += options.additionSeparator;
      }
    }
    if (i < options.repeatTimes - 1) {
      resultString += options.separator;
    }
  }

  return resultString;
};
