function solution(numbers, k) {

  // return numbers[Math.abs(numbers.length - 2 * Math.abs(1 - k))]
  const index = (2 * (k - 1)) % numbers.length;
  return numbers[index];
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