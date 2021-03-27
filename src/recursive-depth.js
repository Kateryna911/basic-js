module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (Array.isArray(arr)) {
            let depth = 1;
            let max = 1;
            for (let i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i]))
                    depth = this.calculateDepth(arr[i]) + 1;
                max = max < depth ? depth : max;
            }
            return max;
        }
        return 1;
    }
};