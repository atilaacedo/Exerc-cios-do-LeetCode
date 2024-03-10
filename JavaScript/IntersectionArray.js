/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let a = new Set(nums1);
    let intersectionArr = [];
    a.forEach((a) => {
        if(nums2.includes(a))
            intersectionArr.push(a);
    })

    return intersectionArr;
};

console.log(intersection([1,2,2,1], [2,2]))