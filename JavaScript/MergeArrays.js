/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    const res = {};

    for(let i = 0; i < nums1.length; i++){
        const id = nums1[i][0]
        const val = nums1[i][1];

        res[id] = val;
    }

    for(let i = 0; i < nums2.length; i++){
        const id = nums2[i][0]
        const val = nums2[i][1];

        res[id] = val + (res[id] || 0);
    }

  
    return Object.entries(res).map((r) => [parseInt(r[0]), r[1]]);
};