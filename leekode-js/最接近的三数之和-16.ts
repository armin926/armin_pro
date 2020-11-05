//! 给定一个包括  n 个整数的数组  nums  和 一个目标值  target。
//! 找出  nums  中的三个整数，使得它们的和与  target  最接近。返回这三个数的和。假定每组输入只存在唯一答案。

/*
*示例：

*输入：nums = [-1,2,1,-4], target = 1
*输出：2
*解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
*/

let threeSumClosest = function (nums: number[], target: number): number {
  let n = nums.length
  if (n === 3) { // 如果数组只有 3 个元素，那么直接输出数组内元素之和
    return getSum(nums)
  }
  //! 首先对数组进行升序排列
  nums.sort((a, b) => a - b)

  let min: number = Infinity // 和 target 的最小差
  let res: number = 0

  //! 从左往右依次尝试定一个基础指针 右边至少再保留两位 否则无法凑成 3 个整数
  for (let i = 0; i <= n - 3; i++) {
    let basic = nums[i]
    let left = i + 1 // 左指针先从 i 右侧的第一位开始尝试
    let right = n - 1 // 右指针先从数组最后一项开始尝试
    while (left < right) {
      let sum = basic + nums[left] + nums[right] // 三数求和
      // 更新最小差
      let diff = Math.abs(sum - target)
      if (diff < min) {
        min = diff
        res = sum
      }
      if (sum < target) {
        // 求出的和如果小于目标值的话 可以尝试把左指针右移 扩大值
        left++
      } else if (sum > target) {
        right--
      } else {
        // 相等的话 差就为 0 一定是答案
        console.log(sum)
        return sum
      }
    }
  }
  console.log(res);
  return res
}

function getSum(nums: number[]): number {
  return nums.reduce((total, cur) => total + cur, 0)
}

threeSumClosest([-1,2,1,-4],1)