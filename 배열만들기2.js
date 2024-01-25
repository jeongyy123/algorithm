function solution(l, r) {
  let result = [];
  for (let i = l; i <= r; i++) {
    if ((/^[05]+$/).test(String(i))) {
      result.push(i)
    }
  }
  return result.length === 0 ? [-1] : result;
}

const l = 5;
const r = 555;

console.log(solution(l, r))
