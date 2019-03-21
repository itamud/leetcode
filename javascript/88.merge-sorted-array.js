/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 *
 * https://leetcode.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (35.00%)
 * Total Accepted:    336K
 * Total Submissions: 960.1K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as
 * one sorted array.
 * 
 * Note:
 * 
 * 
 * The number of elements initialized in nums1 and nums2 are m and n
 * respectively.
 * You may assume that nums1 has enough space (size that is greater or equal to
 * m + n) to hold additional elements from nums2.
 * 
 * 
 * Example:
 * 
 * 
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * Output: [1,2,2,3,5,6]
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  if (m === 0) {
    nums1 = nums2
    return
  }
  if (n === 0) return
  var total = nums1.length + nums2.length
  var pos = 0
  var limit = m
  for (var i = 0; i < n; i++) {
    for (var j = pos; j < nums1.length; j++) {
      if (nums2[i] >= nums1[j] && (nums2[i] < nums1[j + 1] || j >= limit - 1)) {
        nums1.splice(j + 1, 0, nums2[i])
        pos = j + 1 
        limit++
        break
      }
    }
  }
  nums1.splice(m + n, total - m - n)
};

