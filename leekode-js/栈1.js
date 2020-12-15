// 有效的括号

var isVaild = function(s){
  if(s.length & 1) return false; // 奇数肯定是false,直接返回节约时间
  let stack = []
  let map = {
    ")":"(",
    "]":"[",
    "}":"{"
  }
  for(let i=0;i<s.length;i++){
    if(s[i]==="("||s[i]==="["||s[i]==="{"){ // 匹配左括号
      stack.push(s[i])
    }else if(stack[stack.length-1] === map[s[i]]){ // 匹配右括号
      stack.pop()
    }else {
      return false
    }
  }
  return !stack.length
}
