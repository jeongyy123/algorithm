function solution(arr) {
  let compareArr = arr.slice();
  let count = 0;
  while (compareArr === arr) {
    compareArr = arr.slice()
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 50 && arr[i] % 2 === 0) {
        arr[i] /= 2
      } else {
        arr[i] = arr[i] * 2 - 1
      }
      count++;
    }
  }
  return count
}

const arr = [1, 2, 3, 100, 99, 98]

console.log(solution(arr))