/*
*20.有效的括号
*给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

*有效字符串需满足：

*左括号必须用相同类型的右括号闭合。
*左括号必须以正确的顺序闭合。
*注意空字符串可被认为是有效字符串。
*输入: "()"
*输出: true
*输入: "()[]{}"
*输出: true
*输入: "(]"
*输出: false
*/

let mapKuo: any = {
  '(': ')',
  '{': '}',
  '[': ']'
}

function isValid(s: string): boolean {
  // 定义一个栈
  let stack: string[] = []
  // 定义栈顶元素，用于比较
  let top: string | undefined
  // 遍历字符串
  for(let char of s){
    let value:string
    //! 赋值语句的返回结果为赋值结果
    if((value = mapKuo[char])){
      // 将'key'是左括号对应的'value'入栈
      stack.push(value)
      console.log(stack);
      
    }else {
      // 出栈
      top = stack.pop()
      if(top !== char){
        return false
      }
    }
  }
  // 如果栈内还有元素则代表没有完全匹配，不是有效的括号 返回 false
  // 反之 返回 true
  return !stack.length
};