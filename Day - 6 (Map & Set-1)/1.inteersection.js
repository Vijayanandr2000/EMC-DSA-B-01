// https://leetcode.com/problems/intersection-of-two-arrays/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i])) {
      map.set(nums1[i], map.get(nums1[i] + 1));
    } else {
      map.set(nums1[i], 1);
    }
  }

  let set = new Set();
  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i])) {
      set.add(nums2[i]);
    }
  }

  return [...set];
};
