const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let firstLetters = [];

  for (let name of members) {
    if (typeof name === "string") {
      firstLetters.push(name.trim().charAt(0).toUpperCase());
    }
  }

  let dreamTeamName = firstLetters.sort().join('');

  return dreamTeamName;
};
