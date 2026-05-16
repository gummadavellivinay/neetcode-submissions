class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hasDup = false;
        if(!nums) {
            hasDup = false;
        }
        const keyValMap = {};
        for(const key of nums) {
            if(!keyValMap[key]) {
                keyValMap[key] =  true;
            } else {
                hasDup = true;
                break;
            }
        }
        return hasDup;
    }
}
