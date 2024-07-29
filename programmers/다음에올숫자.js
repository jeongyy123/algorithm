function solution(common) {
  let diff = common[2] - common[1] === common[1] - common[0];
  let mark = common[2] * common[1] >= 0 ? 1 : -1;

  if (diff) {
    return common[common.length - 1] + (common[2] - common[1])
  } else {
    return common[common.length - 1] * 2 * mark
  }
}

const common1 = [1, 2, 3, 4]
const common2 = [2, 4, 8]
const common3 = [-1, 2, -4]


console.log(solution(common1))
console.log(solution(common2))
console.log(solution(common3))//8

//Others

const solution = c => c[1] - c[0] === c[2] - c[1] ? c[c.length - 1] + c[1] - c[0] : c[c.length - 1] * c[1] / c[0]