const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
    const EARS = "^^";
    let cats = [];
    cats = matrix.flat().filter(item => item === EARS);
    return cats.length;
};
