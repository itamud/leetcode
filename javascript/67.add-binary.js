/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (37.65%)
 * Total Accepted:    280.4K
 * Total Submissions: 735.6K
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings, return their sum (also a binary string).
 * 
 * The input strings are both non-empty and contains only characters 1 or 0.
 * 
 * Example 1:
 * 
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * 
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var i = 0
  var carry = 0
  var result = []

  for (var i = 0; i < Math.max(a.length, b.length); i++) {
    var key_a = a.length - i - 1
    var key_b = b.length - i - 1
    var val_a = +a[key_a] || 0
    var val_b = +b[key_b] || 0
    result[Math.max(key_a, key_b)] = (val_a + val_b + carry) % 2
    carry = Math.floor((val_a + val_b + carry) / 2)
  }

  if (carry) {
    result.unshift('1')
  }

  return result.join('')

  // while (i < Math.min(a.length, b.length)) {
  //   var sum = a[i] + a[j]
  //   if (carry) sum += 1
  //   result.push(sum % 2)
  //   carry = sum / 2
  // }
    
};

