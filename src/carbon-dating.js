const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    let sampleActivityParsed = parseFloat(sampleActivity);
    if (typeof(sampleActivity) === "string" && !isNaN(sampleActivityParsed) && sampleActivityParsed < MODERN_ACTIVITY && sampleActivityParsed > 0) {
        return Math.abs(Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityParsed) / (0.693 / HALF_LIFE_PERIOD)));
    }
    return false;
};