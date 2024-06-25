function solution(arr, k) {
  if (k % 2 !== 0) {
    return arr.map((acc, cur) => acc * k);
  } else {
    return arr.map((acc, cur) => acc + k);
  }
}

const arr1 = [1, 2, 3, 100, 99, 98];

const k1 = 3;
const k2 = 2;

console.log(solution(arr1, k1))
console.log(solution(arr1, k2))

//Others

const solution = (arr, k) => arr.map(v => k % 2 ? v * k : v + k)