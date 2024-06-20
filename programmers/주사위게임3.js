function solution(a, b, c, d) {
  let answer = 0;
  let arr = [a, b, c, d].sort()
  const set = new Set(arr)
  console.log(set)
  console.log(set.size)
  if (set.size === 1) {
    answer = set[0] * 111
  } else if (set.size === 2) {
    answer = (10 * set[0] * set[1])
  } else if (set.size === 2) {
    answer = (set[0] + set[1]) * ~~(set[0] - set[1])
  } else if (set.size === 3) {
    answer = set[1] * set[2]
  } else {
    answer = set[0]
  }
  return answer;
}

const { a, b, c, d } = [2, 2, 2, 2];

console.log(solution(a, b, c, d))