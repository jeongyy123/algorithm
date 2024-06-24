function solution(myStr) {
  const splitedMyStr = myStr.split(/[abc]/g)

  const filtedSplitedMyStr = splitedMyStr.filter((val) => val !== '')
  return filtedSplitedMyStr.length === 0 ? ["EMPTY"] : filtedSplitedMyStr
}

const myStr = "baconlettucetomato";
const myStr1 = "cabab";

console.log(solution(myStr))
console.log(solution(myStr1))


// Others
// 1.
const solution = s => s.match(/[^a-c]+/g) || ['EMPTY']

// // 2.
// function solution(myStr) {
//   const list = myStr.split(/[a|b|c]/).filter(str => str);
//   return list.length ? list : ["EMPTY"];
// }
