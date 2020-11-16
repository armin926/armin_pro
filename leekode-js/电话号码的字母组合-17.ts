/*
*给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

*给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

*示例:

*输入："23"
*输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*说明:
*尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
*/
let letterMap: string[] = [
  " ", // 0
  "", // 1
  "abc", // 2
  "def", // 3
  "ghi", // 4
  "jkl", // 5
  "mno", // 6
  "pqrs", // 7
  "tuv", // 8
  "wxyz", // 9
]

function letterCombinations(digits: string): string[] {
  let result: string[] = []
  if (digits === "") {
    return result
  }
  let findCombinations = (index: number, str: string) => {
    if (digits.length === index) {
      result.push(str)
      return
    }
    let char = digits[index]
    let letters = letterMap[Number(char)]

    for (let i = 0; i < letters.length; i++) {
      let letter = letters[i]
      findCombinations(index + 1, `${str}${letter}`)
    }
  }
  findCombinations(0, "")
  return result
};
