function solution(arr, n) {
  if (arr.length % 2 !== 0) {
    for (let i = 0; i < arr.length; i += 2) {
      arr[i] += n;
    }
  } else {
    for (let i = 1; i < arr.length; i += 2) {
      arr[i] += n;
    }
  }
  return arr;
}

const arr1 = [49, 12, 100, 276, 33]
const arr2 = [444, 555, 666, 777]

const n1 = 27
const n2 = 100

console.log(solution(arr1, n1))
console.log(solution(arr2, n2))

//Others
const solution = (arr, n) => arr.map((num, idx) => (
  arr.length % 2 !== idx % 2
    ? num + n
    : num
))