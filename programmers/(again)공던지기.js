function solution(numbers, k) {
  let pattern = [];
  if (numbers.length % 2 === 0) {
    for (let i = 0; i < numbers.length; i += 2) {
      pattern.push(numbers[i])
    }
  } else {
    for (let i = 0; i < 2; i++) {
      let arr = [];
      arr.push(...numbers)
      for (let j = 0; j < arr.length; j += 2) {
        pattern.push(arr[j])
      }
    }
  }

  console.log(pattern)
  // 짝수면 주고 받는 사람고정
  // 홀수면 일정 패턴 있음
  // (1-> 3, 3->2, 2 -> 1) 1-> 3
  // (1 -> 3, 3 -> 5, 5 -> 1), 1-> 3

}

const numbers1 = [1, 2, 3, 4]
const numbers2 = [1, 2, 3, 4, 5, 6]
const numbers3 = [1, 2, 3]


const k1 = 2;
const k2 = 5;
const k3 = 3;

console.log(solution(numbers1, k1))
console.log(solution(numbers2, k2))
console.log(solution(numbers3, k3))