function solution(brown, yellow) {
  // const amount = brown + yellow
  // let result = []
  // let index = 1;
  // while (index <= amount / 2) {
  //   if (amount % index === 0) {
  //     result.push(index)
  //   }
  //   index++
  // }

  // result = [...result, amount]
  // console.log(result)

  // let a = 0;
  // let b = 0;

  // if (result.length % 2 === 0) {
  //   a = result[result.length / 2]
  //   b = result[result.length / 2 - 1]
  // } else {
  //   a = result[Math.floor(result.length / 2)]
  //   b = result[Math.floor(result.length / 2)]
  // }

  // return [a, b];
}

const brown1 = 10;
const yellow1 = 2;

const brown2 = 8;
const yellow2 = 1;

const brown3 = 24;
const yellow3 = 24;

const brown4 = 50;
const yellow4 = 22;

// console.log(solution(brown1, yellow1))
// console.log(solution(brown2, yellow2))
// console.log(solution(brown3, yellow3))
console.log(solution(brown4, yellow4)) // [24, 3]