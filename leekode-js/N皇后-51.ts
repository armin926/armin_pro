//! n  皇后问题研究的是如何将 n  个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
/*
*给定一个整数 n，返回所有不同的  n  皇后问题的解决方案。
*
*每一种解法包含一个明确的  n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
*
*示例:
*
*输入: 4
*输出: [
* [".Q..",  // 解法 1
*  "...Q",
*  "Q...",
*  "..Q."],
*
* ["..Q.",  // 解法 2
*  "Q...",
*  "...Q",
*  ".Q.."]
*]
*解释: 4 皇后问题存在两个不同的解法。

*提示：

*皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。
*/

function solveNQueens(n: number): string[][] {
  let res: string[][] = []

  // 已摆放皇后的列下标
  let columns: boolean[] = []
  // 已摆放皇后的对角线1下标  左下 -> 右上
  // 计算某个坐标是否在这个对角线的方式是[行下标+列下标]是否相等
  let dia1: boolean[] = []
  // 已摆放皇后的对角线2下标 左上 -> 右下
  // 计算某个坐标是否在这个对角线的方式是 [行下标 - 列下标] 是否相等
  let dia2: boolean[] = []

  // 尝试在一个 n 皇后问题中 摆放第index行内的皇后位置
  let putQueen = (rowIndex: number, row: number[]) => {
    if (rowIndex === n) {
      res.push(generateBoard(row))
      return
    }
    // 尝试摆第index行的皇后 尝试[0,n-1]列
    for (let columnIndex = 0; columnIndex < n; columnIndex++) {
      // 在列上不冲突
      let colunmnNotConflict = !columns[columnIndex]
      // 在对角线1上不冲突
      let dia1NotConflict = !dia1[rowIndex + columnIndex]
      // 在对角线2上不冲突
      let dia2NotConflict = !dia2[rowIndex - columnIndex]
      if (colunmnNotConflict && dia1NotConflict && dia2NotConflict) {
        columns[columnIndex] = true
        dia1[rowIndex + columnIndex] = true
        dia2[rowIndex - columnIndex] = true

        putQueen(rowIndex + 1, row.concat(columnIndex))

        columns[columnIndex] = false
        dia1[rowIndex + columnIndex] = false
        dia2[rowIndex - columnIndex] = false
      }
    }
  }

  putQueen(0, [])

  return res
}

function generateBoard(row: number[]) {
  let n = row.length
  let res = []
  for (let y = 0; y < n; y++) {
    let cur = ""
    for (let x = 0; x < n; x++) {
      if (x === row[y]) {
        cur += "Q"
      } else {
        cur += "."
      }
    }
    res.push(cur)
  }
  return res
}



