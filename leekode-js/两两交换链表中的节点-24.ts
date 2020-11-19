/*
*给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

*你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

*示例:

*给定 1->2->3->4, 你应该返回 2->1->4->3.

*/


class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) {
    return null
  }
  let helper = function (node: ListNode): ListNode | null {
    let tempNext = node.next
    if (tempNext) {
      let tempNextNext = node.next.next
      node.next.next = node
      if (tempNextNext) {
        node.next = helper(tempNextNext)
      } else {
        node.next = null
      }
    }
    return tempNext || node
  }
  let res = helper(head)

  return res || head
};
