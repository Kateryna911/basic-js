module.exports = function repeater(str, options) {
    str = String(str);
    options.addition = (options.addition === undefined) ? '' : String(options.addition);
    options.separator = options.separator ? options.separator : '+';
    options.additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
    options.repeatTimes = options.repeatTimes ? +(options.repeatTimes) : 1;
    options.additionRepeatTimes = options.additionRepeatTimes ? +(options.additionRepeatTimes) : 1;
    let result = '';
    for (let i = 1; i <= options.repeatTimes; i++) {
        result += str;
        for (let j = 1; j <= options.additionRepeatTimes; j++) {
            result += options.addition;
            if (j != options.additionRepeatTimes) {
                result += options.additionSeparator;
            }
        }
        if (i != options.repeatTimes) {
            result += options.separator;
        }
    }
    return result;
};