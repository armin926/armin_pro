/*
*给定一个二叉树，返回所有从根节点到叶子节点的路径。

*说明:  叶子节点是指没有子节点的节点。

*示例:

*输入:

*   1
* /   \
*2     3
* \
*  5

*输出: ["1->2->5", "1->3"]

*解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
*/

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


function binaryTreePaths(root: TreeNode | null): string[] {
  let res: string[] = []
  let dfs = (node: TreeNode, path: string = "") => {
    if (!node) {
      return
    }
    let newPath = path ? `${path}->${node.val}` : `${node.val}`
    if (!node.left && !node.right) {
      res.push(newPath)
    }
    dfs(node.left, newPath)
    dfs(node.right, newPath)
  }
  dfs(root)
  return res
};