/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const hash = {};
    let count = 0;
    
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] + nums2[j] in hash) {
                hash[nums1[i] + nums2[j]]++;
            } else {
                hash[nums1[i] + nums2[j]] = 1;
            }
        }
    }
    
    for (let x = 0; x < nums3.length; x++) {
        for (let y = 0; y < nums4.length; y++) {
            if (-(nums3[x] + nums4[y]) in hash) {
                count += hash[-(nums3[x] + nums4[y])];
            }
        }
    }
    
    return count;
};