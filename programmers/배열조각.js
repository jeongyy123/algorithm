function solution(arr, query) {
  // for (let i = 0; i < query.length; i++) {
  //   if (i % 2 === 0) {
  //     arr = arr.slice(0, query[i] + 1)
  //   } else {
  //     arr = arr.slice(query[i])
  //   }
  // }

  query.map((v, i) => i % 2 === 0 ? arr = arr.slice(0, query[i] + 1) : arr = arr.slice(query[i]))

  return arr;
}

const arr = [0, 1, 2, 3, 4, 5];
const query = [4, 1, 2];
console.log(solution(arr, query))