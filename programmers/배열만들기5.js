function solution(intStrs, k, s, l) {
  let answer = [];
  for (let ints of intStrs) {

    let slicedInts = Number(ints.slice(s, s + l))
    if (slicedInts > k) {
      answer.push(slicedInts)
    }
  }
  return answer;
}

const intStrs = ["0123456789", "9876543210", "9999999999999"]
const k = 50000
const s = 5
const l = 5

console.log(solution(intStrs, k, s, l))


// Others
function solution(intStrs, k, s, l) {
  return intStrs.map((v) => +v.slice(s, s + l)).filter((v) => v > k);
}