const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== "string" ||
    isNaN(+sampleActivity) ||
    +sampleActivity <= 0 ||
    +sampleActivity > MODERN_ACTIVITY
  )
    return false;
    
  const DECAY_RATE = Math.log(2) / HALF_LIFE_PERIOD;
  let timeInYears = Math.log(MODERN_ACTIVITY / sampleActivity) / DECAY_RATE;
  return Math.ceil(timeInYears);
};
